import React from 'react';
import Movie from "../Movies/Movie";
import Person from "../Person/Person";

const SearchResults = props => {
  const { isLoaded, searchType, searchResults } = props.item;
  const { fetchData } = props;

  return (
    <React.Fragment> 
      <div className="movieGrid">
          {isLoaded && searchType === "movie" &&  
             searchResults.map(item=> {
                return (
                  <Movie
                    key={item.id}
                    movie={item}
                  />
                );
            })
          }
            
          {isLoaded && searchType === 'person' && (
            searchResults.map(item=> {
              return (
                <Person
                  key={item.id}
                  item={item}
                />
              );
            })
          )}
        </div>
        {isLoaded && 
          <button className='btn btn-loadMore' onClick={fetchData}>See More Results</button>
        }  
      </React.Fragment>
  );
};

export default SearchResults;
