import React, { Fragment } from 'react'




const Card = ({ name, device, id }) => {

      return (
            <Fragment>

                  <div className=" bg-light-blue dib br3 pa3 ma2 bw3 tc grow shadow 100px  " >

                        <img
                              alt="myPic"
                              src={`https://robohash.org/RandomTextInputforImage${id}`}>
                        </img>

                        <div >
                              <h1> {name} </h1>
                              <p className='blue br bb bg-white' >{device}</p>

                        </div>

                  </div>

            </Fragment>
      );

}
export default Card;