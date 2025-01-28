import { useState } from "react";
const TodoItem = ({
  list,
  id,
  deleteList,
  setEditID,
  EditID,

  edit,
}) => {
  let [Editvalue, setEditvalue] = useState(list);
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <span className="text-gray-700">
        {EditID == id ? (
          <input
            value={Editvalue}
            onChange={(e) => setEditvalue(e.target.value)}
            type="text"
          />
        ) : (
          list
        )}
      </span>
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
