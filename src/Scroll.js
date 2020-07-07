import React from 'react';


const Scroll = (props) =>
      <div style={{ overflowY: "scroll", height: '600px', scrollBehavior: 'auto' }}>
            {props.children}
      </div>


export default Scroll;