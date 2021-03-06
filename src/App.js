import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Explore from "./pages/Explore";
import GridParent from "./pages/GridParent";
import Genres from "./pages/Genres";
import CategoryLanding from "./pages/CategoryLanding";
import Times from "./pages/Times";
import MoviePage from "./pages/MoviePage";
import Recommendations from "./pages/Recommendations";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Person from "./pages/Person";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="pageBkgrd">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user/recommendations" component={Recommendations} />
            <Route exact path="/user/watchlist" component={Watchlist} />
            <Route path="/movies/:movie" component={MoviePage} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/explore/genres" component={Genres} />
            <Route exact path="/explore/times" component={Times} />
            <Route
              path="/explore/genres/:genre/trending"
              component={GridParent}
            />
            <Route path="/explore/genres/:genre" component={CategoryLanding} />
            <Route path="/explore/times/:time/trending" component={GridParent} />
            <Route path="/explore/times/:time" component={CategoryLanding} />
            <Route path="/explore/:page" component={GridParent} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route path="/people/:person" component={Person} />
          </Switch>
        </div> 
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

// https://github.com/ReactTraining/react-router/issues/4105
