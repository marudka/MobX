import ReactDOM from "react-dom";
import React from "react";

import Todo from "./components/Todo";
import store from "./store/TodoStore";

ReactDOM.render(<Todo />, document.getElementById("app"));

