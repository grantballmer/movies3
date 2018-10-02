import React from "react";
import { Link } from "react-router-dom";
import MainBanner from "../components/Banners/MainBanner";
import LandingGrid from "../components/Grids/LandingGrid";

class Home extends React.Component {
  render() {
    return (
      <div className="main-padding">
        <MainBanner />
          <h1 className="title">Trending Movies</h1>
          <LandingGrid />
          <Link to="/explore/trending" className="pageLink">
            See All Trending Movies >>
          </Link>
      </div>
    );
  }
}

export default Home;
