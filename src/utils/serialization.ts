import type { Workflow, WorkflowEdge, WorkflowNode } from "../types/workflow";

export function buildWorkflowFromState(
    nodes: WorkflowNode[],
    edges: WorkflowEdge[]
): Workflow {
    return {
        id: "workflow-1",
        name: "HR Workflow",
        nodes,
        edges,
    };
}
