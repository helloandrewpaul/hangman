import React from 'react';
import styled from 'styled-components';

const WrongLetters = ({ wrongLetters }) => {
  return (
    <GraveYardWrap>
      <div>
        {wrongLetters.length > 0 && <GraveYard>Graveyard:</GraveYard>}
        {wrongLetters
          .map((letter, index) => <Dead key={index}>{letter}</Dead>)
          .reduce(
            (previous, current) =>
              previous === null ? [current] : [previous, ', ', current],
            null
          )}
      </div>
    </GraveYardWrap>
  );
};

export default WrongLetters;

const Dead = styled.div`
  font-size: 24px;
`;

const GraveYard = styled.p`
  margin: 0 0 5px;
`;

const GraveYardWrap = styled.div`
width:100%;
  position: absolute;
bottom:0;
  display: flex;
  flex-direction: column;
  text-align: right;
`;


