import React, { Fragment, Component } from 'react';
import CardList from './CardList';
import { robos } from './roboList'
// import {SearchBoxName, SearchBoxDevice} from './SearchBox.js'
import SearchBoxName from './SearchBox.js'

class App extends Component  {
      constructor(){
            super()
            this.state={
                  robos: robos,
                  SearchInputName: '',
                  // SearchInputDevice: '',
            }
      }
      onSearchByName =(event)=>{
            console.log(event.target.value)
            this.setState({SearchInputName: event.target.value})
            // const filterRobo = this.state.robos.filter(robo=>{
            //       return robo.name.toLowerCase().includes(this.state.SearchInput.toLowerCase())
            // })
            // console.log(filterRobo)
      }
      // onSearchByDevice =(event)=>{
      //       console.log(event.target.value)
      //       this.setState({SearchInputDevice: event.target.value})
      // }
      render(){

            const filterRoboByName = this.state.robos.filter(robo=>{
                  return robo.name.toLowerCase().includes(this.state.SearchInputName.toLowerCase())

            })

            // const filterRoboByDevice = this.state.filter(robo=>{
            //       return robo.device.toLowerCase().includes(this.state.SearchInputDevice.toLowerCase())
            // })
            console.log(filterRoboByName)


            return (
                  <Fragment>
                        <div className='tc'>
                              <h1>Alian Friends</h1>
                              <SearchBoxName onSearchByName={this.onSearchByName} />
                              {/* <SearchBoxDevice onSearchByDevice={this.state.onSearchByDevice} /> */}
                              <hr/><hr/>
                              {/* <CardList robos={this.state.robos} /> */}
                              <CardList robos={filterRoboByName} />
                              {/* <CardList robos={filterRoboByDevice} /> */}
                        </div>
                  </Fragment>
            );
      }
      

}
export default App;