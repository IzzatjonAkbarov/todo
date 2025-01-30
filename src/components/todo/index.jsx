import React, { useEffect, useState } from "react";
import TodoItem from "./todoitem";
let count = 0;

if (count <= 0 || localStorage.datalocal.length == 0) {
  localStorage.setItem("countOfTheTask", 0);
  count = 0;
}
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
  const [check, setCheck] = useState(false);
  const [EditID, setEditID] = useState(null);
  const [Editvalue, setEditvalue] = useState(list);
  let countOfTheTask = localStorage.getItem("countOfTheTask");
  useEffect(() => {
    setTimeout(() => {
      console.log(countOfTheTask);
    }, 100);
  });
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
        { list, id: Date.now(), date: gettingDate() },
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
  let setcount = () => {
    if (check) {
      count--;
    } else if (!check) {
      count++;
    }
    localStorage.setItem("countOfTheTask", Math.abs(count));
    return count;
  };

  let smth = localStorage.getItem("countOfTheTask");
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
          <p>{countOfTheTask}0%</p>
        </div>
        <div className="rounded-[20px] w-full bg-red-500 h-5">
          <div
            className="rounded-[20px] bg-teal-500 h-5"
            style={{ width: `${setcount()}%` }}></div>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      <div className="space-y-3">
        {(search ? searchResults : datastorage).map((value) => (
          <TodoItem
            key={value.id}
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
            setcount={setcount}
            count={count}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
