import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  padding: 20px;
  margin: 20px;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.16;

  letter-spacing: 0.01em;

  margin-bottom: 20px;
`;

export const Input = styled(TextField)`
  margin-bottom: 10px;
`;

export const ListContatcts = styled.ul`
  margin-top: 10px;
`;
export const ItemContatct = styled.li`
  font-size: 13px;
  line-height: 1.16;
  letter-spacing: 0.03em;

  display: flex;
  justify-content: space-between;

  padding: 5px 16px;
  color: #1f3349;

  border-bottom: 1px solid #c5c5c5;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  letter-spacing: 0.03em;

  color: #1f3349;
`;
export const NameContatct = styled.b`
  margin-right: 5px;
`;
export const NumberContatct = styled.p`
  font-weight: 400;
`;
