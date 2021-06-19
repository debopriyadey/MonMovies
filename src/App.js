import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Search from './components/Search';
import Watched from './components/Watched';
import Watchlater from './components/Watchlater';
import  CurrentMovie from './components/CurrentMovie';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router >
        <div className="App">
            <Switch>
                <Route path="/MonMovies/search" component={Search} />
                <Route path="/MonMovies/watchlater" component={Watchlater} />
                <Route path="/MonMovies/watched" component={Watched} />
                <Route path="/MonMovies/currentmovie" component={CurrentMovie} />
                <Route path="/MonMovies" component={Home} />
                <Route component={PageNotFound} />
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
