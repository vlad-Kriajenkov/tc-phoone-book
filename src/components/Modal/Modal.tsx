import { ChangeEvent, FC, FormEvent, useState } from 'react';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button, Grid, TextField } from '@mui/material';
import { InputBox, style, Title } from './Modal.styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { patchContact } from 'redux/contact/contact-operation';
import { IPatchContact } from 'interfaces/interface';

interface IMpdalProps {
  handleClose: () => void;
  open: boolean;
}

const ModalContact: FC<IMpdalProps> = ({ handleClose, open }) => {
  const dispatch = useAppDispatch();
  const contact = useAppSelector(state => state.contacts.contactPatch);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'phone':
        return setPhone(value);
      default:
        return;
    }
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newContact: IPatchContact = { name, phone, id: contact?.id };
    dispatch(patchContact(newContact));
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Title>Edit Contact</Title>
        <form onSubmit={onSubmit}>
          <InputBox container rowSpacing={2} columnSpacing={{ md: 2 }}>
            <Grid item xs={12}>
              <TextField
                id="name"
                type="text"
                fullWidth
                label={contact?.name}
                variant="filled"
                required
                onChange={handlerChange}
                value={name}
                name="name"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="number"
                type="phone"
                fullWidth
                label={contact?.phone}
                variant="filled"
                required
                onChange={handlerChange}
                value={phone}
                name="phone"
              />
            </Grid>
          </InputBox>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
export { ModalContact };
