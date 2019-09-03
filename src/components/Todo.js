import React, { useState } from 'react';

const Todo = ({ todo, id, updateTodo }) => {
  const [editing, setEditing] = useState(false);
  const [val, updateVal] = useState(todo);
  return (
    <div>
      {editing ? (
        <span>
          <input onChange={e => updateVal(e.target.value)} value={val} />
          <button
            onClick={() => {
              setEditing(false);
              updateVal(todo);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setEditing(false);
              updateTodo(id, val);
            }}
          >
            Save
          </button>
        </span>
      ) : (
        <span>
          {todo}
          <button onClick={() => setEditing(true)}>Edit</button>
        </span>
      )}
    </div>
  );
};

export default Todo;
