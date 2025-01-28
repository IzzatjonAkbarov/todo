// import React, { Component } from "react";

// export default class Child extends Component {
//   render() {
//     return (
//       <div>
//         <div className="flex items-center justify-between ">
//           <ul className="flex items-center justify-between">
//             <li className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
//               Home
//             </li>
//             <li className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
//               About
//             </li>
//             <li className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
//               Contact
//             </li>
//             <li className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
//               Services
//             </li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// this is the code for the header class component
import React from "react";

const Child = () => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <ul className="flex items-center justify-between bg-red-600 text-[#fff]">
          <li className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            Home
          </li>
          <li className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            About
          </li>
          <li className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            Contact
          </li>
          <li className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            Services
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Child;
