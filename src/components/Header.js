import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrap>
      <Head>Hangman</Head>
      <Tag>Find the hidden word - Enter a letter</Tag>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Head = styled.h1`
  display: inline-flex;
  justify-content: center;
`;
const Tag = styled.p`
  display: inline-flex;
  justify-content: center;
`;
