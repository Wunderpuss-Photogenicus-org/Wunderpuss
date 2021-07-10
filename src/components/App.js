import React from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    {/* <Route exact path="/" component={MainPage} />
                    <Route exact path="/Favorites" component={Favorites} />
                    <Route exact path="/Featured" component={Featured} /> */}
                </Switch>
            </Router>
        )
    }
}

export default App;