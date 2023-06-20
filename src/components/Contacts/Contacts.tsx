import { ChangeEvent, FC, useEffect, useState } from 'react';
import {
  Container,
  Title,
  Input,
  ItemContatct,
  Wrapper,
  NameContatct,
  NumberContatct,
} from './Contacts.styled';
import { ModalContact } from 'components/index';

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import {
  deleteContact,
  getContacts,
  contactOne,
} from '../../redux/contact/contact-operation';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Contacts: FC = () => {
  const [filterName, setFilterName] = useState('');
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(state => state.contacts.contacts);

  // Modal
  const [open, setOpen] = useState(false);

  const handleOpen = (id: string) => {
    dispatch(contactOne(id));
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const onDeleteContact = (id: string) => {
    dispatch(deleteContact(id));
  };
  const hadelFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterName(value);
  };

  const visibelContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterName)
  );
  return (
    <Container>
      <Title>Contact</Title>
      <Input
        fullWidth
        id="standard-basic"
        label="Find contacts by name"
        variant="outlined"
        value={filterName}
        name="filter"
        type="text"
        onChange={hadelFilter}
      />

      {contacts.length === 0
        ? `You don't have any contact 😓`
        : visibelContact.map(({ id, name, phone }) => {
            return (
              <ItemContatct key={id}>
                <Wrapper>
                  <NameContatct>{name}:</NameContatct>
                  <NumberContatct>{phone}</NumberContatct>
                </Wrapper>
                <div>
                  <IconButton aria-label="edit" onClick={() => handleOpen(id)}>
                    <EditIcon sx={{ width: 24, height: 24 }} />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => onDeleteContact(id)}
                  >
                    <DeleteIcon sx={{ width: 24, height: 24 }} />
                  </IconButton>
                </div>
              </ItemContatct>
            );
          })}
      <ModalContact handleClose={handleClose} open={open} />
    </Container>
  );
};

export { Contacts };
