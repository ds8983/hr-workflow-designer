import { useWorkflowStore } from "../../hooks/useWorkflowStore";
import type { AnyNodeData } from "../../types/workflow";
import StartNodeForm from "../forms/StartNodeForm";
import TaskNodeForm from "../forms/TaskNodeForm";
import ApprovalNodeForm from "../forms/ApprovalNodeForm";
import AutomatedNodeForm from "../forms/AutomatedNodeForm";
import EndNodeForm from "../forms/EndNodeForm";

export default function NodeConfigPanel() {
    const { nodes, selectedNodeId } = useWorkflowStore();
    const node = nodes.find((n) => n.id === selectedNodeId);

    if (!node) return <div className="panel">Select a node to edit</div>;

    const data = node.data as AnyNodeData;

    switch (data.type) {
        case "start":
            return <StartNodeForm nodeId={node.id} data={data} />;
        case "task":
            return <TaskNodeForm nodeId={node.id} data={data} />;
        case "approval":
            return <ApprovalNodeForm nodeId={node.id} data={data} />;
        case "automated":
            return <AutomatedNodeForm nodeId={node.id} data={data} />;
        case "end":
            return <EndNodeForm nodeId={node.id} data={data} />;
        default:
            return null;
    }
}
