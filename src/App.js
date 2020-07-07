import React, { Fragment, Component } from 'react';
import CardList from './CardList';
import { robos } from './roboList'
import SearchBoxName from './SearchBox.js'

class App extends Component {
      constructor() {
            super()
            this.state = {
                  robos: robos,
                  // robos: [],
                  SearchInputName: '',
            }
      }

   

            onSearchByName = (event) => {
                  console.log(event.target.value)
                  this.setState({ SearchInputName: event.target.value })
                  // const filterRobo = this.state.robos.filter(robo=>{
                  //       return robo.name.toLowerCase().includes(this.state.SearchInput.toLowerCase())
                  // })
                  // console.log(filterRobo)
            };
            
            render(){

                  const filterRoboByName = this.state.robos.filter(robo => {
                        return robo.name.toLowerCase().includes(this.state.SearchInputName.toLowerCase())

                  })

                 
                  console.log(filterRoboByName)

                  if (this.state.robos.length === 0) {
                        return <h1>waiting&#10148;&#10148;&#10148;</h1>

                  } else {
                        return(
                              <Fragment>
                                    <div className='tc'>
                                          <h1>alien Friends</h1>
                                          <SearchBoxName onSearchByName={this.onSearchByName} />
                                   
                                          <hr /><hr />
                                          {/* <CardList robos={this.state.robos} /> */}
                                          <CardList robos={filterRoboByName} />
                                     
                                    </div>
                              </Fragment>
                        );
                  };


            };


      };
      export default App;