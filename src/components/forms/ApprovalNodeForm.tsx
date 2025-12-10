import type { ApprovalNodeData } from "../../types/workflow";
import { useWorkflowStore } from "../../hooks/useWorkflowStore";

export default function ApprovalNodeForm({
    nodeId,
    data,
}: {
    nodeId: string;
    data: ApprovalNodeData;
}) {
    const update = useWorkflowStore((s) => s.updateNodeData);

    return (
        <div className="panel">
            <h3>Approval Node</h3>
            <label>
                Title
                <input
                    value={data.title}
                    onChange={(e) => update(nodeId, { title: e.target.value })}
                />
            </label>
            <label>
                Approver Role
                <input
                    value={data.approverRole}
                    onChange={(e) =>
                        update(nodeId, { approverRole: e.target.value })
                    }
                />
            </label>
            <label>
                Auto-approve Threshold
                <input
                    type="number"
                    value={data.autoApproveThreshold ?? 0}
                    onChange={(e) =>
                        update(nodeId, {
                            autoApproveThreshold: Number(e.target.value),
                        })
                    }
                />
            </label>
        </div>
    );
}
