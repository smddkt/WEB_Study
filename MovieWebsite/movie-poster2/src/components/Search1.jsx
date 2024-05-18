//eslint-disable-next-line
import React from 'react';
import { IconButton } from 'rsuite';
import { Search } from '@rsuite/icons';
import 'rsuite/dist/rsuite.min.css';
import { StyledFindMovies, StyledNewInput } from './StyledSearch';


function Search1() {
  return (
    <div className='find-movies'>
      <StyledFindMovies>📽️Find your movies!</ StyledFindMovies>
      <StyledNewInput>
        <input type='text' />
        <IconButton icon={<Search />} appearance='primary' circle size='sm' />
        </StyledNewInput>
    </div>
  );
}

export default Search1;
