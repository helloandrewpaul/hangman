import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';
import styled from 'styled-components';

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
  open,
  setOpen,
}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations! You won!';
    playable = false;
    setOpen(true);
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'loose') {
    finalMessage = 'Unfortunately you lost';
    finalMessageRevealWord = `... the word was ${selectedWord}`;
    playable = false;
    setOpen(true);
  }

  useEffect(() => setPlayable(playable));

  return (
    <PopupWrap open={open}>
      <PopupText>
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <Btn onClick={playAgain}>Play Again</Btn>
      </PopupText>
    </PopupWrap>
  );
};

export default Popup;

const Btn = styled.button`
  cursor: pointer;
  background-color: #000;
  color: #fff;
  border: 2px solid #000;
  margin-top: 20px;
  padding: 12px 20px;
  font-size: 16px;
  :hover {
    color: #000;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;

const PopupWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: all 1s ease-in-out;
  align-items: center;
  justify-content: center;
`;

const PopupText = styled.div`
  background: #fff;
  border: 2px solid #000;
  box-shadow: 0 15px 10px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;
