import React from 'react';
import styled from 'styled-components';

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <WordDiv>
      {selectedWord.split('').map((letter, index) => {
        return (
          <Letter key={index}>
            {correctLetters.includes(letter) ? letter : ''}
          </Letter>
        );
      })}
    </WordDiv>
  );
};

export default Word;

const Letter = styled.span`
  border-bottom: 3px solid #000;
  display: inline-flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  height: 50px;
  width: 20px;
`;

const WordDiv = styled.div`
  display: flex;
  justify-content: center;
  margin:0 auto;
  width:100%;
`;
