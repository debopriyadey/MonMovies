import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Search from './components/Search';
import Watched from './components/Watched';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Search" component={Search} />
                <Route path="/Watched" component={Watched} />
                <Route path="/Wishlist" component={Wishlist} />
            </Switch>
        </div>
    </Router>
);
}

function Home() {
return (
    <div>
        <Main />
    </div>
);
}


export default App;
