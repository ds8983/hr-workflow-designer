import type { EndNodeData } from "../../types/workflow";
import { useWorkflowStore } from "../../hooks/useWorkflowStore";

export default function EndNodeForm({
    nodeId,
    data,
}: {
    nodeId: string;
    data: EndNodeData;
}) {
    const update = useWorkflowStore((s) => s.updateNodeData);

    return (
        <div className="panel">
            <h3>End Node</h3>
            <label>
                End Message
                <input
                    value={data.endMessage}
                    onChange={(e) => update(nodeId, { endMessage: e.target.value })}
                />
            </label>
            <label className="checkbox-row">
                <input
                    type="checkbox"
                    checked={data.summaryEnabled}
                    onChange={(e) =>
                        update(nodeId, { summaryEnabled: e.target.checked })
                    }
                />
                Include Summary
            </label>
        </div>
    );
}
