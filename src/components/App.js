import React from 'react';
import login from './login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return(
            <Router>
                <Switch>
                    {/* <Route exact path="/" component={MainPage} /> */}
                    <Route exact path="/" component={login} />
                    {/* <Route exact path="/newAccount" component={createAccount} />
                    <Route exact path="/add" component={addBookmark} /> */}
                </Switch>
            </Router>
    )
}

export default App;