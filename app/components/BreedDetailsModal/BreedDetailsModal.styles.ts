import styled from 'styled-components';
import Modal from '@mui/material/Modal';

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentWrapper = styled.section`
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px solid white;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  min-width: 250px;
  min-height: 300px;
`;

export const ModalImageWrapper = styled.div`
  flex-basis: 100%;
  position: relative;
  height: 300px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
