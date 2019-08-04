import React from 'react';
import styled from 'styled-components';

const OverlayContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 999;
  pointer-events: none;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99;
`;

export default function({ children }: any) {
  return (
    <OverlayContainer>
      <Overlay>{children}</Overlay>
    </OverlayContainer>
  );
}
