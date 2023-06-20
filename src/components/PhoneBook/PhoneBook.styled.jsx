import styled from "@emotion/styled";
import { TextField, Button } from '@mui/material';
export const ContainerPhoneBook = styled.div`
  font-family: "Roboto";
  font-style: normal;
  height: fit-content;
  width: 400px;
  padding: 23px;
  margin: 20px;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;
  
`;
export const TitlePhoneBook = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.16;

  letter-spacing: 0.01em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Labe = styled.label`
  display: flex;
  flex-direction: column;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  /* identical to box height */

  margin-top: 10px;

  color: #7f8e9d;
`;

export const Input = styled(TextField)`
  margin-bottom: 10px;
`;

export const ButtonAdd = styled(Button)`
 
`;
