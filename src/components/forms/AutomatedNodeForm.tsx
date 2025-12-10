import { useEffect, useState } from "react";
import type { AutomatedNodeData, AutomatedAction } from "../../types/workflow";
import { useWorkflowStore } from "../../hooks/useWorkflowStore";
import { getAutomations } from "../../api/automations";

export default function AutomatedNodeForm({
    nodeId,
    data,
}: {
    nodeId: string;
    data: AutomatedNodeData;
}) {
    const update = useWorkflowStore((s) => s.updateNodeData);
    const [actions, setActions] = useState<AutomatedAction[]>([]);

    useEffect(() => {
        getAutomations().then(setActions);
    }, []);

    const selected = actions.find((a) => a.id === data.actionId);

    const handleActionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.target.value;
        update(nodeId, {
            actionId: id,
            actionParams: {},
        });
    };

    const handleParamChange = (param: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        update(nodeId, {
            actionParams: { ...(data.actionParams || {}), [param]: e.target.value },
        });
    };

    return (
        <div className="panel">
            <h3>Automated Step</h3>
            <label>
                Title
                <input
                    value={data.title}
                    onChange={(e) => update(nodeId, { title: e.target.value })}
                />
            </label>

            <label>
                Action
                <select value={data.actionId || ""} onChange={handleActionChange}>
                    <option value="">Select action</option>
                    {actions.map((a) => (
                        <option key={a.id} value={a.id}>
                            {a.label}
                        </option>
                    ))}
                </select>
            </label>

            {selected && (
                <div className="param-section">
                    <h4>Action Parameters</h4>
                    {selected.params.map((p) => (
                        <label key={p}>
                            {p}
                            <input
                                value={data.actionParams?.[p] || ""}
                                onChange={handleParamChange(p)}
                            />
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}
