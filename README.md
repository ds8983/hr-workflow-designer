HR Workflow Designer (React + React Flow)

This project is a mini HR Workflow Builder that lets an HR admin visually create and test workflow processes like onboarding, approvals, automated actions, and more.
It was built as part of a time-boxed (4–6 hour) assignment, so the focus is on clean architecture, working functionality, and extendability over perfect UI polish.

🌟 What this project does

The app provides a simple but powerful workflow-building experience:

🎨 Visual Canvas

Drag-and-drop nodes from a sidebar

Arrange and connect steps visually

Supports 5 workflow node types:

Start

Task

Approval

Automated Step

End

📝 Node Editing Panel

Click any node to configure it.
Every node type has its own form:

Start Node: title + metadata

Task Node: title, description, assignee, due date

Approval Node: approver role, auto-approve threshold

Automated Node: select an action → dynamic parameter inputs

End Node: end message + summary flag

⚙️ Simulation Panel

You can test the workflow by:

Validating the structure

Serializing the graph into JSON

Sending it to a mock /simulate API

Viewing a step-by-step execution log

This gives a feel for how the workflow would behave in a real system.

🧩 Architecture Overview

The project is intentionally structured to be modular, scalable, and easy to maintain.

src/
  api/              # Fake API calls (automations + workflow simulation)
  components/
    canvas/         # React Flow canvas + node components
    forms/          # Node configuration forms
    layout/         # Layout + sidebar
    panels/         # Config panel + simulation panel
  hooks/            # Zustand workflow store
  types/            # Strong TypeScript interfaces for all nodes
  utils/            # Validation + workflow serialization helpers
  App.tsx
  main.tsx


React Flow handles the visual graph, while Zustand manages the global workflow state.
All node logic is kept separate from canvas rendering for clarity and scalability.

🔌 Mock API Endpoints

The app uses a tiny local mock API layer:

GET /automations

Returns available automated actions (e.g., “Send Email”, “Generate Document”).
The parameters in the response dynamically generate form inputs.

POST /simulate

Receives the serialized workflow and returns a simple execution log.

This keeps the app lightweight while still demonstrating data flow and testing behavior.

🚀 Getting Started
Install dependencies
npm install

Start the dev server
npm run dev


Then open:

http://localhost:5173


You’ll see the full workflow builder with canvas, sidebar, and configuration panels.

✔ What’s Completed (within the assignment timebox)

Visual drag-and-drop workflow canvas

Custom React Flow node components

Full configuration forms for all node types

Dynamic automated-node parameters

Centralized state management via Zustand

Workflow serialization + simulation

Validation: missing start/end, orphan nodes, cycle detection

Modular, production-friendly project structure

Everything needed for the assignment is implemented.

➕ What I Would Add With More Time

This section is useful for interviewers:

Undo / Redo

Import & export workflows as JSON

Auto-layout for cleaner workflows

Visual error indicators on nodes

A small library of pre-built workflow templates

Persisting workflows to a backend

Richer UI with animations and drag handles

💡 Final Thoughts

This project intentionally balances speed and structure.
The goal wasn’t to build a full-featured enterprise workflow engine, but to show:

Strong understanding of React Flow

Clean component & state architecture

Dynamic configuration-driven forms

Practical workflow reasoning

Ability to build something scalable under time constraints

If you're reviewing this project, thank you for taking the time to go through it!
