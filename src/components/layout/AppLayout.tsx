import Sidebar from "./Sidebar";
import WorkflowCanvas from "../canvas/WorkflowCanvas";
import NodeConfigPanel from "../panels/NodeConfigPanel";
import TestPanel from "../panels/TestPanel";

export default function AppLayout() {
    return (
        <div className="app-root">
            <Sidebar />
            <WorkflowCanvas />
            <div className="right-panel">
                <NodeConfigPanel />
                <TestPanel />
            </div>
        </div>
    );
}
