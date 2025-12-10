import { Handle, Position } from "reactflow";
import type { ApprovalNodeData } from "../../types/workflow";

export default function ApprovalNode({ data }: { data: ApprovalNodeData }) {
    return (
        <div className="node node-approval">
            <div className="node-title">{data.title || "Approval"}</div>
            <div className="node-subtitle">{data.approverRole}</div>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    );
}
