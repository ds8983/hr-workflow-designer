import type { StartNodeData } from "../../types/workflow";
import { useWorkflowStore } from "../../hooks/useWorkflowStore";

export default function StartNodeForm({
    nodeId,
    data,
}: {
    nodeId: string;
    data: StartNodeData;
}) {
    const update = useWorkflowStore((s) => s.updateNodeData);

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
        update(nodeId, { startTitle: e.target.value });

    return (
        <div className="panel">
            <h3>Start Node</h3>
            <label>
                Start Title
                <input value={data.startTitle} onChange={handleTitle} />
            </label>
            {/* metadata UI could be added here if you have time */}
        </div>
    );
}
