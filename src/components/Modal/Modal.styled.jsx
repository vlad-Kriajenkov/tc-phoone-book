import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const InputBox = styled(Grid)`
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 17px;
  line-height: 120%;

  margin-bottom: 20px;
`;

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};