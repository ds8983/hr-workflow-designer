import { Handle, Position } from "reactflow";
import type { EndNodeData } from "../../types/workflow";

export default function EndNode({ data }: { data: EndNodeData }) {
    return (
        <div className="node node-end">
            <div className="node-title">{data.endMessage || "End"}</div>
            <Handle type="target" position={Position.Left} />
        </div>
    );
}
