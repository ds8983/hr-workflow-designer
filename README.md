HR Workflow Designer (React + React Flow)

This project is a lightweight but fully functional HR Workflow Builder that lets HR teams visually design and test processes such as onboarding flows, approval chains, and automated actions.
It was built under a tight 4–6 hour window, which meant focusing on clean structure, practical features, and future scalability rather than UI perfection.

🌟 What the App Offers
🎨 Visual Workflow Canvas

Drag-and-drop interface for building workflows

Connect nodes to define the flow

Supports five essential step types:

Start

Task

Approval

Automated Step

End

📝 Configurable Node Editor

Clicking a node opens its configuration panel.
Each step type exposes only the fields that matter:

Start: title, metadata

Task: title, description, assignee, due date

Approval: approver role, auto-approval threshold

Automated Step: pick an action → dynamic input fields

End: summary toggle, closing message

The goal was to keep everything clear and intuitive.

⚙️ Workflow Simulation

The built-in simulator lets you:

Validate workflow structure

Convert the graph into clean JSON

Send it to a mock /simulate API

See a step-by-step execution trace

This gives a realistic sense of how the workflow would run in production.

🧩 Project Architecture

The codebase is split cleanly for readability and long-term maintainability:

src/
  api/              # Mock automation + simulation endpoints
  components/
    canvas/         # React Flow canvas + custom nodes
    forms/          # Node configuration forms
    layout/         # App layout + sidebar
    panels/         # Config + simulation panels
  hooks/            # Zustand workflow store
  types/            # Strong TypeScript types for all nodes
  utils/            # Validation + serialization logic
  App.tsx
  main.tsx


React Flow manages graph interactions

Zustand keeps workflow state predictable and centralized

Node rendering and node logic are intentionally separated for clarity and extension

🔌 Mock APIs
GET /automations

Returns available automated actions and their input fields.

POST /simulate

Receives the serialized workflow and returns a mock run log.

This provides enough backend behavior to simulate real-world scenarios without adding unnecessary weight.

🚀 Running the App

Install:

npm install


Start:

npm run dev


Open:

http://localhost:5173


You’ll see the canvas, sidebar, config panel, and simulation tools ready to use.

✔ Completed Within the Timebox

Drag-and-drop workflow building

Custom React Flow node components

Individual configuration forms for all node types

Dynamic fields for automated steps

Zustand-based centralized state management

Workflow validation + serialization

Simulation with step-by-step logs

Detection for cycles, orphans, missing start/end nodes

Clean, extendable architecture

Everything required for the assignment is built and working.

➕ What I’d Add With More Time

Undo/Redo support

Workflow import/export (JSON)

Auto-layout for cleaner graph positioning

Error indicators directly on nodes

Pre-built workflow templates

Backend persistence and versioning

More polished UI and micro-interactions

💡 Final Thoughts

This project is meant to demonstrate practical engineering under time pressure:

Strong grasp of React Flow

Clean component + state design

Realistic workflow modeling

Ability to deliver complete, scalable features quickly

If you're reviewing the project, I appreciate you taking the time to go through it.
