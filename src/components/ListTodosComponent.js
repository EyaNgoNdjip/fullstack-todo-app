import React from "react";

const ListTodosComponent = () => {
  const today = new Date();

  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );

  const todos = [
    {
      id: 1,
      description: "Learn AWS",
      done: false,
      targetDate,
    },
    {
      id: 2,
      description: "Learn AZURE",
      done: false,
      targetDate,
    },
    {
      id: 3,
      description: "Learn Kubernetes",
      done: false,
      targetDate,
    },
  ];

  const renderedTodos = todos.map((todo) => {
    return (
      <tr key={todo.id}>
        <td>Todo ID: {todo.id}</td>
        <td> Todo Description: {todo.description}</td>
        <td> Todo is Done ? {todo.done.toString()}</td>
        <td>Todo target date : {todo.targetDate.toDateString()}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1 className="list-todos"> List todos</h1>
      <div>
        <h2>Things you may done</h2>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
              <th>Isdone ?</th>
              <th>Target date</th>
            </tr>
          </thead>
          <tbody>{renderedTodos}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodosComponent;
