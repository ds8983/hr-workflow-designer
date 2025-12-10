import type { Node, Edge } from "reactflow";

export type NodeKind = "start" | "task" | "approval" | "automated" | "end";

export interface BaseNodeData {
    type: NodeKind;
    label: string;
}

// Start Node
export interface StartNodeData extends BaseNodeData {
    type: "start";
    startTitle: string;
    metadata: Record<string, string>;
}

// Task Node
export interface TaskNodeData extends BaseNodeData {
    type: "task";
    title: string;
    description?: string;
    assignee?: string;
    dueDate?: string;
    customFields: Record<string, string>;
}

// Approval Node
export interface ApprovalNodeData extends BaseNodeData {
    type: "approval";
    title: string;
    approverRole: string;
    autoApproveThreshold?: number;
}

// Automated Step Node
export interface AutomatedAction {
    id: string;
    label: string;
    params: string[];
}

export interface AutomatedNodeData extends BaseNodeData {
    type: "automated";
    title: string;
    actionId?: string;
    actionParams: Record<string, string>;
}

// End Node
export interface EndNodeData extends BaseNodeData {
    type: "end";
    endMessage: string;
    summaryEnabled: boolean;
}

export type AnyNodeData =
    | StartNodeData
    | TaskNodeData
    | ApprovalNodeData
    | AutomatedNodeData
    | EndNodeData;

export type WorkflowNode = Node<AnyNodeData>;
export type WorkflowEdge = Edge;

export interface Workflow {
    id: string;
    name: string;
    nodes: WorkflowNode[];
    edges: WorkflowEdge[];
}
