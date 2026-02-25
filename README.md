# LAB SHEET 2
## JavaScript and DOM – To-Do List 

### 🎓 Student Details
| Field | Details |
| :--- | :--- |
| **Name** | Vani Sugovind S R |
| **Roll No** | AM.SC.U4CSE23266 |
| **Course** | Full Stack Development |
| **Semester** | VI |

---

## 1. Aim
To design and implement an interactive To-Do List web application using HTML, CSS, and JavaScript by applying DOM manipulation techniques and event handling mechanisms.

## 2. Course Outcome Addressed
**CO1:** Use markup and scripting languages to design and validate dynamic web pages.
This application demonstrates the integration of HTML for structure, CSS for styling, and JavaScript for dynamic behavior.

## 3. Problem Statement
Develop a To-Do List application that satisfies the following requirements:
- Provide an input field for entering tasks.
- Include an "Add Task" button and keyboard support (Enter key).
- Prevent empty tasks from being added using validation.
- Display tasks dynamically in an unordered list (`<ul>`).
- Represent each task as a list item (`<li>`) with a unique category and timestamp.
- Provide a delete button for each task.
- Use `addEventListener()` and DOM methods such as `createElement()`, `appendChild()`, and `removeChild()`.

---

## 4. Implementation Details

### 4.1 HTML Structure
The HTML file defines the skeleton of the application:
- A text input field (`taskInput`)
- A category selection dropdown
- An "Add Task" button
- An unordered list (`taskList`) for displaying tasks

The JavaScript file is linked at the bottom of the body to ensure the DOM is fully loaded before script execution.



### 4.2 CSS Styling
CSS is used to:
- Design a responsive and visually appealing user interface.
- Apply **Flexbox** for proper alignment of tasks and buttons.
- Provide **category-based background colors** for visual distinction.
- Implement hover and active effects for the buttons.
- Define a `.completed` class for a strikethrough effect.

### 4.3 JavaScript Functionality
The core functionality is implemented using DOM manipulation and event-driven programming.

#### a) DOM Selection
JavaScript connects to the UI elements using:
```javascript
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const categorySelect = document.getElementById("category");
const taskList = document.getElementById("taskList");
```

#### b) Event Handling
Interactive behavior is achieved without page reloads through:
* **Click Event:** On the Add button to trigger task creation.
* **Keydown Event:** Support for the "Enter" key for better UX.
* **Toggle Event:** Click event for task completion.
* **Delete Event:** Click event for the delete button.

#### c) Preventing Empty Tasks
To ensure data integrity, the following validation check is performed:
```javascript
if (text === "") {
    alert("Task cannot be empty!");
    return;
}
```
#### d) Dynamic Task Creation & Timestamps
Tasks are generated as `<li>` elements using `document.createElement("li")` and `appendChild()`. Each task captures the current time:

```javascript
const now = new Date();
const timestamp = now.toLocaleString(); // Provides context for each task
```
#### e) Task Completion & Deletion
* **Completion:** Uses `classList.toggle("completed")` to visually mark tasks.
* **Deletion:** Task removal is performed using `taskList.removeChild(li)`.
* **Propagation:** `event.stopPropagation()` is implemented on the delete button to ensure that clicking "Delete" does not accidentally trigger the completion toggle on the parent element (Event Bubbling).



---

## 5. Project Structure

```plaintext
lab-2/
│
├── index.html      # UI Structure
├── style.css       # Visual Design and Animations
└── script.js       # Dynamic Logic and DOM Control
```
## 6. Output Description
* **Dynamic Updates:** Tasks are added instantly to the list without a browser refresh.
* **Categorization:** Each task is color-coded based on the user's selection (e.g., Work, Personal, Urgent).
* **Timestamps:** A precise creation time is displayed for every task for better tracking.
* **Interactivity:** Tasks can be marked as completed (visual toggle) or removed individually via a delete button.
* **Performance:** The application logic runs entirely on the client-side, ensuring a fast and seamless user experience.

---

## 7. Conclusion
The **Smart To-Do List** application successfully demonstrates the practical implementation of JavaScript DOM manipulation and event-handling techniques. This project enhances the understanding of:

* **Event-driven programming:** Effectively handling user interactions like clicks and key presses.
* **Dynamic element creation:** Generating and managing the lifecycle of UI elements on the fly.
* **DOM traversal and manipulation:** Navigating and modifying the document structure in real-time.
* **Separation of concerns:** Organizing code into distinct HTML (structure), CSS (styling), and JS (logic) layers for maintainability.
