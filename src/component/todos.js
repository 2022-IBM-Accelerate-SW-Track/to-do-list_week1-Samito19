import React from "react";
import "../component/todos.css";
import { Card, CardContent, Grid, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


// 1. This component formats and returns the list of todos.
// 2. Treat the question mark like an if statement.
// If the todos array has items in the list [todos.length], we want to return the list
// Else, return a message saying "You have no todo's left"
// 3. The map function is called to assign each array item with a key
// 4. Think of lines 14-23 as a loop. For each todo in the todo list, we want to give the list item
// a key, and it's own card shown in the UI
const Todos = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Grid key={todo.id} className="task-grid">
          <Card className="task-container fade-in">
            {/* Remember, we set the local state of this todo item when the user submits the form in 
              AddTodo.js. All we need to do is return the todo list item */}
            <CardContent className="task-content">
              <span className="task-text-content">{todo.content}</span>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit"/>
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You don't have any tasks</p>
  );
  // Lastly, return the todoList constant that we created above to show all of the items on the screen.
  return (
    <div className="todoCollection">
      <div className="todoCollection-container">{todoList}</div>
    </div>
  );
};

export default Todos;
