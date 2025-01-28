// import React, { Component } from "react";
// import Child from "./components/header/index";
// export default class App extends React.Component {
//   state = {
//     counter: 0,
//     isActive: true,
//     data: [],
//     loading: false,
//   };

//   increment = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   };

//   decrement = () => {
//     this.setState({
//       counter: this.state.counter - 1,
//     });
//   };

//   activedUser = () => {
//     this.setState({
//       isActive: !this.state.isActive,
//     });
//   };

//   componentDidMount() {
//     console.log("render1");
//     this.setState({
//       loading: true,
//     });
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((data) => data.json())
//       .then((res) => {
//         this.setState({
//           data: res,
//           loading: false,
//         });
//       });
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.isActive !== prevState.isActive) {
//       fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({
//           id: 2,
//           name: "Ervin Howell",
//           username: "Antonette",
//           email: "Shanna@melissa.tv",
//         }),
//       });
//       console.log("counter");
//     }
//   }

//   render() {
//     const { data, loading } = this.state;
//     return (
//       <div>
//         <button onClick={this.increment}>+</button>
//         <span>{this.state.counter}</span>
//         <button onClick={this.decrement}>-</button>
//         <div className="p-5">
//           <button onClick={this.activedUser}>
//             {this.state.isActive ? "No Active" : "Active"}
//           </button>
//           <div>
//             {this.state.isActive ? "Is actived" : "Error"}
//             {this.state.isActive ? <Child /> : ""}
//             {loading ? "Loading" : <pre>{JSON.stringify(data, null, 4)}</pre>}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// this is code for the App class component

import React, { useState, useEffect } from "react";
import Child from "./components/header";

const App = () => {
  const [state, setState] = useState(0);
  const [active, setActive] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      }),
    });
  }, [active]);

  return (
    <div>
      <button onClick={() => setState(state + 1)}>+</button>
      <span>{state}</span>
      <button onClick={() => setState(state - 1)}>-</button>

      <div>
        <button onClick={() => setActive(!active)}>
          {active ? "No Active" : "Active"}
        </button>
        <div>
          {active ? "Is actived" : "Error"}
          {active ? <Child /> : ""}
          <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
