import type { NodeKind } from "../../types/workflow";

const NODES: { type: NodeKind; label: string }[] = [
    { type: "start", label: "Start" },
    { type: "task", label: "Task" },
    { type: "approval", label: "Approval" },
    { type: "automated", label: "Automated" },
    { type: "end", label: "End" },
];

export default function Sidebar() {
    const onDragStart = (event: React.DragEvent, type: NodeKind) => {
        event.dataTransfer.setData("application/reactflow", type);
        event.dataTransfer.effectAllowed = "move";
    };

    return (
        <div className="sidebar">
            <h3>Node Types</h3>
            {NODES.map((n) => (
                <div
                    key={n.type}
                    className="sidebar-item"
                    onDragStart={(e) => onDragStart(e, n.type)}
                    draggable
                >
                    {n.label}
                </div>
            ))}
        </div>
    );
}
