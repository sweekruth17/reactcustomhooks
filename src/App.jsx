import { useEffect, useState } from "react";
import axios from "axios";
import useTodo from "./useTodo";

function App() {
  const { todos, loading } = useTodo(10);

  return (
    <>
      {loading ? (
        <div>loading.....</div>
      ) : (
        todos.map((todo, index) => {
          return <Track key={index} todo={todo} />;
        })
      )}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
