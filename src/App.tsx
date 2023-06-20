import React from 'react';

import { Contacts,PhooneBook } from './components/index';
import { FlexBox } from 'App.styled';

function App() {
  return (
    <FlexBox>
      <PhooneBook />
      <Contacts />
    </FlexBox>
  );
}

export default App;
