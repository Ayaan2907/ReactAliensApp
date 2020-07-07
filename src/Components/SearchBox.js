import React from 'react';


const SearchBoxName = ({ SearchInputName, onSearchByName }) =>
      <>
            <div className='pa2 tc'>
                  <input
                        className='bg-light-blue bb  dib br3 pa2 ma1 bw1  tc grow shadow 50px '
                        type="search"
                        placeholder='here search aliens by name '
                        onChange={onSearchByName} /* onChange is an html property*/
                  />

            </div>
            <hr />
      </>


export default SearchBoxName;