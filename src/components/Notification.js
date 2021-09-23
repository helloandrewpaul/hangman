import React from 'react';
import styled from 'styled-components';

const Notification = ({ showNotification }) => {
  return (
    <Notice showNotification={showNotification}>
      <p>You have already entered this letter</p>
    </Notice>
  );
};

export default Notification;

const Notice = styled.div`
  border: 2px solid #000;
  background-color: #fff;
  padding: 15px 20px;
  position: absolute;
  bottom: ${({ showNotification }) => (showNotification ? '50px' : '-100%')};
  opacity: ${({ showNotification }) => (showNotification ? '1' : '0')};
  transition: all 1s ease-in-out;
`;
