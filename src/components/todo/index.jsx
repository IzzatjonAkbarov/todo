import React, { useState } from "react";
import TodoItem from "./todoitem";

const Todo = () => {
  const gettingDate = () => {
    let date = new Date();

    let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let alldate = `${hours}:${minutes}`;
    return alldate;
  };
  const [list, setList] = useState("");
  const [search, setsearch] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [EditID, setEditID] = useState(null);
  const [Editvalue, setEditvalue] = useState(list);

  let datastorage = JSON.parse(localStorage.getItem("data")) || [];
  let searchdatastorage =
    JSON.parse(localStorage.getItem("searchdatastorage")) || [];
  const addTodo = (e) => {
    e.preventDefault();

    if (list.trim() === "") {
      setError("Task cannot be empty!");
      return;
    }
    localStorage.setItem(
      "data",
      JSON.stringify([
        ...datastorage,
        { list, id: Date.now(), date: gettingDate(), completed: false },
      ])
    );
    setData((prevData) => [
      ...prevData,
      { list, id: Date.now(), date: gettingDate() },
    ]);
    setList("");
    setError("");
  };
  const [searchResults, setSearchResults] = useState([]);

  const searchtodo = (e) => {
    e.preventDefault();
    let searchdata = datastorage.filter((value) =>
      value.list.toLowerCase().includes(search.toLowerCase())
    );

    if (searchdata.length === 0) {
      setError("Task not found!");
    } else {
      setError("");
    }

    setSearchResults(searchdata);
  };
  const deleteList = (id) => {
    let newData = datastorage.filter((value) => value.id !== id);
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  let addcheck = (id) => {
    let newData = datastorage.map((value) =>
      value.id === id ? { ...value, completed: !value.completed } : value
    );
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  const edit = (id, Editvalue) => {
    datastorage.filter((value) => {
      if (value.id === id) {
        let newdata = datastorage.map((value) =>
          value.id === id
            ? { ...value, list: Editvalue, date: `edited ${gettingDate()}` }
            : value
        );
        setData(newdata);
        localStorage.setItem("data", JSON.stringify(newdata));
        setEditID(value.id);
      }
    });
  };
  const progress = () => {
    if (datastorage.length == 0) return 0;
    const completedtask = datastorage.filter((task) => task.completed).length;
    return Math.round((completedtask / datastorage.length) * 100);
  };
  return (
    <div className="w-[50%] m-auto mt-10 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-lg">
      <h1 className="text-center text-3xl font-bold text-teal-800 mb-6">
        Todo List by Izzatillo
      </h1>

      <form
        onSubmit={searchtodo}
        className="w-full flex items-center gap-2 mb-3">
        <input
          onChange={(e) => setsearch(e.target.value)}
          name="search"
          type="text"
          className="flex-1 h-[45px] px-4 rounded-lg border-2 border-teal-200 focus:border-teal-500 focus:outline-none transition-all"
          placeholder="search your task..."
        />
        <button
          type="submit"
          className="h-[45px] w-[100px] bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all">
          search
        </button>
      </form>
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
      <div className="my-3">
        <div className="flex items-center justify-between px-4">
          <h1 className="text-[18px] text-teal-400">
            Percentage of task you have done
          </h1>
          <p>{progress()}%</p>
        </div>
        <div className="rounded-[20px] w-full bg-red-500 h-5">
          <div
            className="rounded-[20px] bg-teal-500 h-5"
            style={{ width: `${progress()}%` }}></div>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      <div className="space-y-3">
        {(search ? searchResults : datastorage).map((value) => (
          <TodoItem
            key={value.id}
            idofthecheck={value.id}
            {...value}
            date={value.date}
            deleteList={deleteList}
            datastorage={datastorage}
            setEditID={setEditID}
            setEditvalue={setEditvalue}
            EditID={EditID}
            Editvalue={Editvalue}
            edit={edit}
            gettingDate={gettingDate}
            completed={value.completed}
            addcheck={addcheck}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
