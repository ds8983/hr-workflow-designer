import type { AutomatedAction } from "../types/workflow";

const mockAutomations: AutomatedAction[] = [
    { id: "send_email", label: "Send Email", params: ["to", "subject"] },
    { id: "generate_doc", label: "Generate Document", params: ["template", "recipient"] },
];

export async function getAutomations(): Promise<AutomatedAction[]> {
    await new Promise((r) => setTimeout(r, 200));
    return mockAutomations;
}
