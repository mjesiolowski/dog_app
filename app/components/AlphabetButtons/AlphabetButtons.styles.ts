import styled from 'styled-components';
import { ButtonGroup } from '../ButtonGroup';

export const AlphabetButtonsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 12px;
  padding: 12px 0;
  align-items: center;
`;

export const StyledButtonGroup = styled(ButtonGroup)`
  display: flex;
  flex-wrap: wrap;
`;
