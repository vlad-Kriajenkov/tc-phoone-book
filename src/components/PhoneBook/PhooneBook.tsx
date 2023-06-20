import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import {
  ContainerPhoneBook,
  Form,
  TitlePhoneBook,
  Input,
  ButtonAdd,
} from './PhoneBook.styled';
import { addContact } from '../../redux/contact/contact-operation';

import { IAddContact } from '../../interfaces/interface';

const PhooneBook: FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useAppDispatch();
  
  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
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
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newContatct: IAddContact = {
      name,
      phone,
    };
    dispatch(addContact(newContatct));
  };
  return (
    <ContainerPhoneBook>
      <Form onSubmit={onSubmit}>
        <TitlePhoneBook>PhooneBook</TitlePhoneBook>

        <Input
          id="standard-basic"
          label="Name"
          variant="outlined"
          name="name"
          value={name}
          onChange={handelChange}
        />
        <Input
          id="standard-basic"
          label="Phone"
          variant="outlined"
          name="phone"
          value={phone}
          onChange={handelChange}
        />

        <ButtonAdd type="submit" variant="contained">
          Contained
        </ButtonAdd>
      </Form>
    </ContainerPhoneBook>
  );
};

export { PhooneBook };
