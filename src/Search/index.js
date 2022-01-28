import React, { useState, useEffect } from 'react';
import axios from 'axios';

import List from '../List';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    let timerID = null;

    if (searchValue) {
      timerID = setTimeout(async () => {
        const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: searchValue,
          },
        });

        setResults(data.query.search);
      }, 1000);
    }

    return () => {
      clearTimeout(timerID);
    };
  }, [searchValue]);

  return (
    <>
      <form className="ui form">
        <input
          type="text"
          placeholder="Search Wikipedia..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </form>

      <List results={results} />
    </>
  );
};

export default Search;
