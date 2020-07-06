import React from 'react';
import Card from './Card';

const CardList = ({ robos }) => {
            const cardArray = robos.map((user, i) => {
                  return (
                        <Card
                              key={robos[i].id}
                              id={robos[i].id}
                              name={robos[i].name}
                              device={robos[i].device}
                        />
                  );
            });
      return (
            <>
            {cardArray}
            </>
      );
}
export default CardList;