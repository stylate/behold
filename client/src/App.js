import React from 'react';
import { ReportContainer } from './containers/ReportContainer';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 150%;
  max-width: 150vw;
  margin-top: 3%;
`;

const App = () => {
  return (
    <Wrapper>
      <ReportContainer />
    </Wrapper>
  );
}

export default App;
