import React from 'react';
import styled from 'styled-components';

const WrongLetters = ({ wrongLetters }) => {
  return (
    <GraveYardWrap>
      
        {wrongLetters.length > 0 && <GraveYard>Graveyard:</GraveYard>}
        {wrongLetters
          .map((letter, index) => <Dead key={index}>{letter}</Dead>)
          .reduce(
            (previous, current) =>
              previous === null ? [current] : [previous, ', ', current],
            null
          )}
     
    </GraveYardWrap>
  );
};

export default WrongLetters;

const Dead = styled.span`
  font-size: 24px;
  align-items: center;
`;

const GraveYard = styled.p`
  margin: 0 0 5px;
`;

const GraveYardWrap = styled.div`
width:100%;
  position: absolute;
bottom:16px;
  /* display: flex; */
  /* flex-direction: column;
  text-align: right; */
`;


