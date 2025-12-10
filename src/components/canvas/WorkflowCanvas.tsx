import React, { useCallback } from "react";
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
} from "reactflow";
import type { Connection } from "reactflow";
import "reactflow/dist/style.css";

import { useWorkflowStore } from "../../hooks/useWorkflowStore";
import { nodeTypes } from "./NodeTypes";
import type { NodeKind } from "../../types/workflow";

export default function WorkflowCanvas() {
    const {
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnectEdge,
        addNodeAt,
        setSelectedNode,
    } = useWorkflowStore();

    const onConnect = useCallback(
        (params: Connection) => {
            if (params.source && params.target) {
                onConnectEdge({ ...params, id: `${params.source}-${params.target}` } as any);
            }
        },
        [onConnectEdge]
    );

    const onDrop = useCallback(
        (event: React.DragEvent) => {
            event.preventDefault();
            const bounds = (event.target as HTMLDivElement).getBoundingClientRect();
            const type = event.dataTransfer.getData("application/reactflow") as NodeKind;
            const position = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
            addNodeAt(type, position);
        },
        [addNodeAt]
    );

    const onDragOver = (event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    };

    const handleNodeClick = (_: React.MouseEvent, node: { id: string }) => {
        setSelectedNode(node.id);
    };

    return (
        <div className="canvas" onDrop={onDrop} onDragOver={onDragOver}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                onNodeClick={handleNodeClick}
                fitView
            >
                <Background />
                <MiniMap />
                <Controls />
            </ReactFlow>
        </div>
    );
}
