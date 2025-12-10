import { Handle, Position } from "reactflow";
import type { AutomatedNodeData } from "../../types/workflow";

export default function AutomatedNode({ data }: { data: AutomatedNodeData }) {
    return (
        <div className="node node-automated">
            <div className="node-title">{data.title || "Automated Step"}</div>
            <div className="node-subtitle">{data.actionId || "No action"}</div>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    );
}
