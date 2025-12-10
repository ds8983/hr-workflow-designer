import type { Workflow } from "../types/workflow";

export interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

export function validateWorkflow(workflow: Workflow): ValidationResult {
    const errors: string[] = [];

    const startNodes = workflow.nodes.filter((n) => n.type === "start");
    if (startNodes.length === 0) errors.push("Missing Start node.");
    if (startNodes.length > 1) errors.push("Multiple Start nodes found.");

    const endNodes = workflow.nodes.filter((n) => n.type === "end");
    if (endNodes.length === 0) errors.push("At least one End node is required.");

    const incomingCount: Record<string, number> = {};
    workflow.edges.forEach((e) => {
        incomingCount[e.target] = (incomingCount[e.target] || 0) + 1;
    });

    workflow.nodes.forEach((n) => {
        if (n.type !== "start" && !(incomingCount[n.id] > 0)) {
            errors.push(`Node "${n.data.label}" has no incoming connection.`);
        }
    });

    // naive cycle check using DFS
    const adj: Record<string, string[]> = {};
    workflow.edges.forEach((e) => {
        if (!adj[e.source]) adj[e.source] = [];
        adj[e.source].push(e.target);
    });

    const visited = new Set<string>();
    const inStack = new Set<string>();

    const hasCycle = (id: string): boolean => {
        if (inStack.has(id)) return true;
        if (visited.has(id)) return false;
        visited.add(id);
        inStack.add(id);
        for (const nb of adj[id] || []) {
            if (hasCycle(nb)) return true;
        }
        inStack.delete(id);
        return false;
    };

    for (const n of workflow.nodes) {
        if (hasCycle(n.id)) {
            errors.push("Cycle detected in workflow.");
            break;
        }
    }

    return { isValid: errors.length === 0, errors };
}
