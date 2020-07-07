import React, { Fragment, Component } from 'react';
import CardList from '../Components/CardList';
import SearchBoxName from '../Components/SearchBox.js'
import Scroll from '../Components/Scroll'
import './App.css'
// import { robos } from '../Components/roboList'


class App extends Component {
      constructor() {
            super()
            this.state = {
                  // robos: robos,
                  robos: [],
                  SearchInputName: '',
            };
      };


      componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
                  .then(response => response.json())
                  .then(users => { this.setState({ robos: users }) });
      };


      onSearchByName = (event =>
            this.setState({ SearchInputName: event.target.value }));
      // const filterRobo = this.state.robos.filter(robo=>{
      //       return robo.name.toLowerCase().includes(this.state.SearchInput.toLowerCase())
      // })
      // console.log(filterRobo)


      render() {
            const {robos, SearchInputName} = this.state;

            const filterRoboByName = robos.filter(robo =>
                  robo.name.toLowerCase().includes(SearchInputName.toLowerCase()));


            return (!robos.length ?
                  <h1>waiting&#10148;&#10148;&#10148;</h1> :
                  <Fragment>
                        <div className='tc '>
                              <h1 className='custome'>alien Friends</h1>
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