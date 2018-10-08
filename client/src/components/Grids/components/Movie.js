import React from "react";
import { Link } from "react-router-dom";
import history from "../../../history";
import APICalls from "../../../services/apiCalls/apiCalls";
import { connect } from "react-redux";
import {getFormattedTitle} from "../../../services/utilityFuncs/formatTitle";

class Movie extends React.Component {
  handleClick = e => {
    e.preventDefault();
    const formatTitle = getFormattedTitle(this.props.movie.title);
    const movieID = this.props.movie.id;
    const url = APICalls.movieFunc(movieID);

    fetch(url)
      .then(res => res.json())
      .then(result => {
        this.props.getActiveMovie(result);
        history.push(`/movies/${formatTitle}-${movieID}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const movie = this.props.movie;
    const formatTitle = getFormattedTitle(movie.title);

    return (
      <Link
        to={{
          pathname: `/movies/${formatTitle}-${movie.id}`,
          state: movie.id
        }}
        className="movie"
        data-movieid={movie.id}
        onClick={this.handleClick}
      >
        <div className="movie__top">
          <p className="movie__top--watchlist">
            <span className="watchlist-text">Watchlist</span>
            <span className="watchlist-star">{"\u2606"} </span>
          </p>
        </div>
        <div className="movie__poster--wrapper">
          <div className="movie__poster">
            <img
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </div>
        </div>
        <div className="movie__btm">
          <p className="movie__title">{movie.title}</p>
          <div className="btn">
            <p>{"\u2714"} I've seen this</p>
          </div>
        </div>
      </Link>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getActiveMovie: data => {
      dispatch({ type: "GET_MOVIE", data: data });
    }
  };
};

// export default withRouter(Movie);
export default connect(
  null,
  mapDispatchToProps
)(Movie);
