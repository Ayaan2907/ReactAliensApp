import React from 'react';

const SearchBoxName = ({SearchInputName, onSearchByName})=>{
      return(
            <div className='pa3 tc'>
                  <input 
                  className='bg-light-blue dib br3 pa3 ma2 bw1 tc grow shadow 50px '
                  type="search" 
                  placeholder='here search alians by name '
                  onChange={onSearchByName} /* onChange is an html property*/
                  />

            </div>
            
           
     );
}

// const SearchBoxDevice = ({SearchInputDevice, onSearchByDevice})=>{
//       return(
//             <div className='pa3 tc'>
//                   <input 
//                   className='bg-light-blue dib br3 pa3 ma2 bw1 tc grow shadow 50px '
//                   type="search" 
//                   placeholder='here search alians by name '
//                   onChange={onSearchByDevice} /* onChange is an html property*/
//                   />

//             </div>
            
           
//      );
// }
// export {SearchBoxName, SearchBoxDevice};
export default SearchBoxName;