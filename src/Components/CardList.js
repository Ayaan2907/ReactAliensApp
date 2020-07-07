import React from 'react';
import Card from './Card';


const CardList = ({ robos }) => {
      const cardArray = robos.map((user, i) => {
            return (<Card
                  key={robos[i].id}
                  id={robos[i].id}
                  name={robos[i].name}
                  username={robos[i].username} />);
      });
      return (cardArray);
};


export default CardList;