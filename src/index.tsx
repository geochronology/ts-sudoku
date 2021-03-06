import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";

import { Content, Title, Grid, Card } from "components";
import { unregister } from 'core';
import { GlobalStyles, theme } from "styles";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title data-cy="title">Sadooki</Title>
      <Card data-cy="card">
        <Grid />
      </Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
unregister();

