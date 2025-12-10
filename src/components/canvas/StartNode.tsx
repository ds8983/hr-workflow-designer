import { Handle, Position } from "reactflow";
import type { StartNodeData } from "../../types/workflow";

export default function StartNode({ data }: { data: StartNodeData }) {
    return (
        <div className="node node-start">
            <div className="node-title">{data.startTitle || "Start"}</div>
            <Handle type="source" position={Position.Right} />
        </div>
    );
}
