//eslint-disable-next-line
import React, { useState } from 'react';
import { IconButton } from 'rsuite';
import { Search } from '@rsuite/icons';
import 'rsuite/dist/rsuite.min.css';
import { StyledFindMovies, StyledNewInput } from './StyledSearch';

const Search1 = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('검색어:', query);
    onSearch(query);
  };
  return (
    <div className='find-movies'>
      <StyledFindMovies>📽️Find your movies!</StyledFindMovies>
      <StyledNewInput>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton
          icon={<Search />}
          appearance='primary'
          circle
          size='sm'
          onClick={handleSearch}
        />
      </StyledNewInput>
    </div>
  );
};

export default Search1;
