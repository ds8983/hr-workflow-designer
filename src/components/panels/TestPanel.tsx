import { useState } from "react";
import { useWorkflowStore } from "../../hooks/useWorkflowStore";
import { buildWorkflowFromState } from "../../utils/serialization";
import { validateWorkflow } from "../../utils/validation";
import { simulateWorkflow } from "../../api/simulate";
import type { SimulationResult } from "../../api/simulate";

export default function TestPanel() {
    const { nodes, edges } = useWorkflowStore();
    const [errors, setErrors] = useState<string[]>([]);
    const [log, setLog] = useState<string[]>([]);
    const [running, setRunning] = useState(false);

    const handleRun = async () => {
        setRunning(true);
        setErrors([]);
        setLog([]);

        const workflow = buildWorkflowFromState(nodes, edges);
        const validation = validateWorkflow(workflow);
        if (!validation.isValid) {
            setErrors(validation.errors);
            setRunning(false);
            return;
        }

        const result: SimulationResult = await simulateWorkflow(workflow);
        setErrors(result.errors);
        setLog(result.steps.map((s) => `${s.label}: ${s.message}`));
        setRunning(false);
    };

    return (
        <div className="panel test-panel">
            <h3>Workflow Test / Sandbox</h3>
            <button onClick={handleRun} disabled={running}>
                {running ? "Running..." : "Run Simulation"}
            </button>

            {errors.length > 0 && (
                <div className="errors">
                    <h4>Validation Errors</h4>
                    <ul>
                        {errors.map((e, i) => (
                            <li key={i}>{e}</li>
                        ))}
                    </ul>
                </div>
            )}

            {log.length > 0 && (
                <div className="log">
                    <h4>Execution Log</h4>
                    <ul>
                        {log.map((l, i) => (
                            <li key={i}>{l}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
