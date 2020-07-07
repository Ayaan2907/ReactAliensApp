import React from 'react';

const SearchBoxName = ({SearchInputName, onSearchByName})=>{
      return(
            <div className='pa3 tc'>
                  <input 
                  className='bg-light-blue dib br3 pa3 ma2 bw1 tc grow shadow 50px '
                  type="search" 
                  placeholder='here search aliens by name '
                  onChange={onSearchByName} /* onChange is an html property*/
                  />

            </div>
            
           
     );
}


export default SearchBoxName;