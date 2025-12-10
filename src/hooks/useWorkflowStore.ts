import { create } from "zustand";
import { applyNodeChanges, applyEdgeChanges } from "reactflow";
import type { NodeChange, EdgeChange } from "reactflow";
import type { AnyNodeData, NodeKind, WorkflowEdge, WorkflowNode } from "../types/workflow";

interface WorkflowState {
    nodes: WorkflowNode[];
    edges: WorkflowEdge[];
    selectedNodeId?: string;

    onNodesChange: (changes: NodeChange[]) => void;
    onEdgesChange: (changes: EdgeChange[]) => void;

    onConnectEdge: (edge: WorkflowEdge) => void;

    addNodeAt: (type: NodeKind, position: { x: number; y: number }) => void;
    updateNodeData: (id: string, patch: Partial<AnyNodeData>) => void;
    setSelectedNode: (id?: string) => void;
}

function createInitialData(type: NodeKind): AnyNodeData {
    const label = type.toUpperCase();

    switch (type) {
        case "start":
            return { label, type, startTitle: "Start", metadata: {} };
        case "task":
            return { label, type, title: "New Task", description: "", assignee: "", dueDate: "", customFields: {} };
        case "approval":
            return { label, type, title: "Approval", approverRole: "Manager", autoApproveThreshold: 0 };
        case "automated":
            return { label, type, title: "Automated Step", actionId: undefined, actionParams: {} };
        case "end":
            return { label, type, endMessage: "Completed", summaryEnabled: true };
    }
}

export const useWorkflowStore = create<WorkflowState>((set) => ({
    nodes: [],
    edges: [],
    selectedNodeId: undefined,

    onNodesChange: (changes: NodeChange[]) =>
        set((state) => ({
            nodes: applyNodeChanges(changes, state.nodes),
        })),

    onEdgesChange: (changes: EdgeChange[]) =>
        set((state) => ({
            edges: applyEdgeChanges(changes, state.edges),
        })),

    onConnectEdge: (edge: WorkflowEdge) =>
        set((state) => ({
            edges: [...state.edges, edge],
        })),

    addNodeAt: (type: NodeKind, position: { x: number; y: number }) => {
        const id = crypto.randomUUID();
        const data = createInitialData(type);
        const node: WorkflowNode = {
            id,
            type,
            position,
            data,
        };
        set((state) => ({
            nodes: [...state.nodes, node],
        }));
    },

    updateNodeData: (id: string, patch: Partial<AnyNodeData>) =>
        set((state) => ({
            nodes: state.nodes.map((n) =>
                n.id === id ? { ...n, data: { ...n.data, ...patch } as AnyNodeData } : n
            ),
        })),

    setSelectedNode: (id?: string) => set({ selectedNodeId: id }),
}));
