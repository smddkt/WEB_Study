import React from 'react';
import { IconButton } from "rsuite";
import { Search } from '@rsuite/icons';
import "rsuite/dist/rsuite.min.css";

function Search1() {
    return (
        <div className="find-movies">
            <h1>📽️Find your movies!</h1>
            <div className="newinput">
            <input
                type = "text"
                />
            <IconButton icon={<Search />}
                appearance="primary"
                circle size="sm" />
            </div>
        </div>
    )
}

export default Search1