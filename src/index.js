import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//Provider is a react-redux component, responsible for giving react components access to the Redux Store. For this reason, Provider take store as a property.
import { Provider } from "react-redux";
//We must import the store that we will provide
import store from "./redux/store.js";

ReactDOM.render(
	//We provide the store as a property to all the components in our application
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
