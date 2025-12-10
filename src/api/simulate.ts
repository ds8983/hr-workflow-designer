import type { Workflow } from "../types/workflow";

export interface SimulationStep {
    nodeId: string;
    label: string;
    status: "success" | "error";
    message: string;
}

export interface SimulationResult {
    valid: boolean;
    errors: string[];
    steps: SimulationStep[];
}

export async function simulateWorkflow(workflow: Workflow): Promise<SimulationResult> {
    await new Promise((r) => setTimeout(r, 300));

    // trivial "simulation": just walk nodes in order
    const steps: SimulationStep[] = workflow.nodes.map((n) => ({
        nodeId: n.id,
        label: n.data.label,
        status: "success",
        message: `Executed ${n.data.type} node`,
    }));

    return {
        valid: true,
        errors: [],
        steps,
    };
}
