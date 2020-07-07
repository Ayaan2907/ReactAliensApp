import React, { Fragment, Component } from 'react';
import CardList from './CardList';
import { robos } from './roboList'
import SearchBoxName from './SearchBox.js'
import Scroll from './Scroll'

class App extends Component {
      constructor() {
            super()
            this.state = {
                  // robos: robos,
                  robos: [],
                  SearchInputName: '',
            }
      }

      componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
                  .then(response => response.json())
                  .then(users => { this.setState({ robos: users }) });
      }




      onSearchByName = (event) => {
            console.log(event.target.value)
            this.setState({ SearchInputName: event.target.value })
            // const filterRobo = this.state.robos.filter(robo=>{
            //       return robo.name.toLowerCase().includes(this.state.SearchInput.toLowerCase())
            // })
            // console.log(filterRobo)
      };

      render() {

            const filterRoboByName = this.state.robos.filter(robo => {
                  return robo.name.toLowerCase().includes(this.state.SearchInputName.toLowerCase())

            })


            console.log(filterRoboByName)


            return (!robos.length ?
                  <h1>waiting&#10148;&#10148;&#10148;</h1> :
                 <Fragment>
                        <div className='tc'>
                              <h1>alien Friends</h1>
                              <SearchBoxName onSearchByName={this.onSearchByName} />

                       <Scroll>
                             {/* <CardList robos={this.state.robos} /> */}
                             <CardList robos={filterRoboByName} />
                       </Scroll>

                              
                        </div>
                  </Fragment>
            );



      };


};
export default App;