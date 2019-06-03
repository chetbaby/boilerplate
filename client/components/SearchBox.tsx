import React, { Props } from 'react';

const Search: React.FunctionComponent<> = props => (
  <div id="search">
    <input
      type="text"
      className="searchBox"
      value={props.searchWord}
      onChange={(event: React.ChangeEvent<HTMLElement>) =>
        props.saveSearch(event.target.value)
      }
      onKeyDown={(event: React.KeyboardEvent<HTMLElement>) => {
        event.keyCode === 13 && props.getSearchImageAsync(props.searchWord);
      }}
    />
    <button
      id="searchButton"
      onClick={() => props.getSearchImageAsync(props.searchWord)}
    >
      SEARCH
    </button>
  </div>
);

export default Search;
