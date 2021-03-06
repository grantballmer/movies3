import React from "react";
import { Link } from "react-router-dom";
import RowChild from "./components/RowChild";

const Row = props => {
  const { heading, items, path } = props;
  return (
    <div className="row-wrapper">
      {heading && <h2 className="row__header">Movies By {heading}</h2>}

      <div className="row">
        {items.map(item => {
          return <RowChild key={item.type} item={item} path={path} />;
        })}
      </div>
      {heading && (
        <Link to={path} className="row__Btmlink">
          <p>See All {heading}s >></p>
        </Link>
      )}
    </div>
  );
};

export default Row;
