import { Handle, Position } from "reactflow";
import type { TaskNodeData } from "../../types/workflow";

export default function TaskNode({ data }: { data: TaskNodeData }) {
    return (
        <div className="node node-task">
            <div className="node-title">{data.title || "Task"}</div>
            <div className="node-subtitle">{data.assignee || "Unassigned"}</div>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    );
}
