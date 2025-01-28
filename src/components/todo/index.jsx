import React, { useState } from "react";
import TodoItem from "./todoitem";

const Todo = () => {
  const [list, setList] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const [EditID, setEditID] = useState(null);
  const [Editvalue, setEditvalue] = useState(list);

  const addTodo = (e) => {
    e.preventDefault();
    if (list.trim() === "") {
      setError("Task cannot be empty!");
      return;
    }
    setData((prevData) => [...prevData, { list, id: Date.now() }]);
    setList("");
    setError("");
  };

  const deleteList = (id) => {
    let newData = data.filter((value) => value.id !== id);
    setData(newData);
  };

  const edit = (id, Editvalue) => {
    data.filter((value) => {
      if (value.id === id) {
        let newdata = data.map((value) =>
          value.id === id ? { ...value, list: Editvalue } : value
        );
        setData(newdata);

        setEditID(value.id);
      }
    });
  };

  return (
    <div className="w-[50%] m-auto mt-10 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-lg">
      <h1 className="text-center text-3xl font-bold text-teal-800 mb-6">
        Todo List with n17
      </h1>
      <form onSubmit={addTodo} className="w-full flex items-center gap-2 mb-3">
        <input
          value={list}
          onChange={(e) => {
            setList(e.target.value);
            if (e.target.value.trim() !== "") {
              setError("");
            }
          }}
          name="list"
          type="text"
          className="flex-1 h-[45px] px-4 rounded-lg border-2 border-teal-200 focus:border-teal-500 focus:outline-none transition-all"
          placeholder="Add a new task..."
        />
        <button
          type="submit"
          className="h-[45px] w-[100px] bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all">
          Add
        </button>
      </form>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      <div className="space-y-3">
        {data.map((value) => (
          <TodoItem
            key={value.id}
            {...value}
            deleteList={deleteList}
            data={data}
            setEditID={setEditID}
            setEditvalue={setEditvalue}
            EditID={EditID}
            Editvalue={Editvalue}
            edit={edit}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
