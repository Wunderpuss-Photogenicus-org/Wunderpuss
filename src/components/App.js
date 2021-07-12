import React from 'react';
import Login from './login';
import CreateAccount from './createAccount';
import AddBookmark from './add';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from './MainPage.jsx'

function App() {
    return(
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/newAccount" component={CreateAccount} />
                    <Route exact path="/add" component={AddBookmark} />
                </Switch>
            </Router>
    )
}

export default App;