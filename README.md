## Live Demo
https://task-glitch-2fsw.vercel.app/

# TaskGlitch - Task Management Dashboard

TaskGlitch is a high-performance React-based task management application. This project involved identifying and resolving five critical bugs ranging from data synchronization issues to complex UI event handling and mathematical logic errors.

## Screenshots

| **Dashboard Overview** 
|----------------------|--------------------|

<img width="1202" height="868" alt="image" src="https://github.com/user-attachments/assets/ded96b43-645a-4ba7-9d01-2c22a4c56bcd" />


## 🛠️ Bug Fixes & Improvements
Below is a summary of the technical challenges resolved during this mission:
- Bug 1: Data Duplication - Fixed an issue where tasks would double upon page refresh by implementing a fetchedRef to prevent redundant API calls during React Strict Mode.
- Bug 2: Ghost Undo - Resolved a state management glitch where the "Undo" action persisted incorrectly after the snackbar disappeared.
- Bug 3: Unstable Sorting - Replaced non-deterministic sorting logic with a stable localeCompare and secondary ID sorting to prevent tasks from jumping positions.
- Bug 4: Event Bubbling (Double Dialogs) - Implemented e.stopPropagation() on table action buttons to prevent the "View Details" dialog from triggering when the "Edit" or "Delete" buttons were clicked.
- Bug 5: Mathematical Safety (ROI) - Hardened the computeROI logic to handle zero-hour tasks, preventing Infinity and NaN values from breaking the Metrics Bar.

## Technology Stack

- **Frontend:**
  - React.js
  - Vite
  - TypeScript
 
- **UI Library:**
  - Material UI

 - **State Management:**
  - Context API
 
### Prerequisites

Ensure you have the following tools installed:

- **Node.js**: [Download and Install](https://nodejs.org/)
- **npm**: Comes with Node.js
- **Git**: [Download and Install](https://git-scm.com/)

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/nitin2001581402/task-glitch.git   
cd task-glitch       

