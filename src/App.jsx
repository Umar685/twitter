import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Twitter from "./Twitter";

class App extends React.Component {
    render() {
        return <BrowserRouter>
            <Route path="/" component={Twitter} />
        </BrowserRouter>
    }
}

export default App;