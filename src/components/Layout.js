import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import Style from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={Style.h1}>
          Lotto App
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={Style.pullright}>
      Created by ...
      </p>
    </Container>
  );
};

export default Layout;