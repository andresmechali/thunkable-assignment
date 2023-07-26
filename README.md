# Thunkable assignment

This project is an assignment for an interview process at Thunkable.

## How to run

Clone the repository:
```bash
git clone https://github.com/andresmechali/thunkable-assignment
```

Access the project directory and install dependencies:
```bash
cd thunkable-assignment
npm install
```

Run app in development mode:
```bash
npm start
```
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tests (WIP)

Due to a lack of time, there are not additional tests added. However, the default `<App />` test works, as I
configured the testing renderer to be connected to the store. To run this tests, run:
```bash
npm test
```

## Decisions and data flow
### Redux
As state management, I used [Redux](https://react-redux.js.org/). This is an overkill for such a small application, but 
it serves the purpose and makes the data flow cleaner.

### Ant Design
As a component library, I used [Ant Design](https://ant.design/components/overview/) because it aligns with the provided design, and it's simple to add and use. 

### Responsiveness
I made the application responsive and mobile friendly. This was done mostly using [TailwindCSS](https://tailwindcss.com/), with a mobile-first approach.

### Drag and drop
For the drag and drop feature, I used [@hello-pangea/dnd](https://github.com/hello-pangea/dnd), which is a fork of [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd),
with the advantage of being actively maintained and having solved some issues with React 18.

### Others
I had to make some assumptions and some UX/UI decisions, not included on the design, as follows:
- When adding a new project, the name input is focused.
- When editing an existing project, the name input is focused.
- When editing, the input starts with the current name.
- When clicking outside the project while creating/editing, the changes are lost.
- The application layout changes at a width of 800px.
- The white background on some designs, as well as the border shadow of the navbar should not be there,
as they are not found in the other pages.
- Long names on projects are filled with an ellipsis (...). In this case, full names
can be visualized by hovering.