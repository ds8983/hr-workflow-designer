import type { TaskNodeData } from "../../types/workflow";
import { useWorkflowStore } from "../../hooks/useWorkflowStore";

export default function TaskNodeForm({
    nodeId,
    data,
}: {
    nodeId: string;
    data: TaskNodeData;
}) {
    const update = useWorkflowStore((s) => s.updateNodeData) as (id: string, patch: Partial<TaskNodeData>) => void;

    const handleChange =
        (field: keyof TaskNodeData) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                update(nodeId, { [field]: e.target.value } as any);

    return (
        <div className="panel">
            <h3>Task Node</h3>
            <label>
                Title *
                <input value={data.title} onChange={handleChange("title")} />
            </label>
            <label>
                Description
                <textarea
                    value={data.description || ""}
                    onChange={handleChange("description")}
                />
            </label>
            <label>
                Assignee
                <input
                    value={data.assignee || ""}
                    onChange={handleChange("assignee")}
                />
            </label>
            <label>
                Due Date
                <input
                    type="date"
                    value={data.dueDate || ""}
                    onChange={handleChange("dueDate")}
                />
            </label>
        </div>
    );
}
