import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import PersonalInfo from './components/PersonalInfo';
import SocialLinks from './components/SocialLinks';

const AppElement = styled.div`
  background: linear-gradient(130deg, #00000060, transparent);
`

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Box = styled.div`
  width: 550px;
`

const App = () => {
  return (
    <AppElement>
      <GlobalStyle />
      <Container>
        <Box>
          <PersonalInfo />
          <SocialLinks />
        </Box>
      </Container>
    </AppElement>
  )
}

export default App;
