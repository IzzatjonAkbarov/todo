import { useState } from "react";
const TodoItem = ({ list, id, deleteList, setEditID, EditID, edit, date }) => {
  let [Editvalue, setEditvalue] = useState(list);
  return (
    <div className="flex items-center relative justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <span className="text-gray-700 w-full">
        {EditID == id ? (
          <input
            className="border-2 border-gray-300 rounded-lg p-1 w-full focus:outline-none"
            value={Editvalue}
            onChange={(e) => setEditvalue(e.target.value)}
            type="text"
          />
        ) : (
          list
        )}
      </span>
      <span className="absolute right-3 bottom-[-5px] text-[13px]">{date}</span>
      <div className="flex gap-2">
        <button
          onClick={() => deleteList(id)}
          className="text-red-400 hover:text-red-600 transition-colors">
          Delete
        </button>
        {EditID == id ? (
          <button
            onClick={() => {
              edit(id, Editvalue);
              setEditID(null);
            }}
            className="text-blue-400 hover:text-blue-600 transition-colors">
            Save
          </button>
        ) : (
          <button
            onClick={() => edit(id)}
            className="text-green-400 hover:text-green-600 transition-colors">
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
