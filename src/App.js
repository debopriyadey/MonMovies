import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Search from './components/Search';
import Watched from './components/Watched';
import Watchlater from './components/Watchlater';
import  CurrentMovie from './components/CurrentMovie';

function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/MonMovies" exact component={Home} />
                <Route path="/MonMovies/search" component={Search} />
                <Route path="/MonMovies/watched" component={Watched} />
                <Route path="/MonMovies/watchlater" component={Watchlater} />
                <Route path="/MonMovies/currentmovie" component={CurrentMovie} />
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
