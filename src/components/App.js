import React from 'react';
import Login from './login';
import createAccount from './createAccount';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from './MainPage.jsx'

function App() {
    return(
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/newAccount" component={createAccount} />
                    {/* <Route exact path="/add" component={addBookmark} /> */}
                </Switch>
            </Router>
    )
}

export default App;