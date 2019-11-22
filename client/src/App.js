import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from './actions/actions';

import { Grid } from 'semantic-ui-react';
import { Report, Gallery } from './components';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 150%;
  max-width: 150vw;
  margin-top: 3%;
`;

const App = () => {
  const diseases = useSelector(state => state.reportReducer.options);
  const imageState = useSelector(state => state.imageReducer);
  const dispatch = useDispatch();
  useEffect( () => {
    const fetchData = async () => {
      const response = await actions.fetchInitial();
      dispatch(response);
    }

    const fetchGallery = async () => {
      const response = await actions.fetchGallery();
      dispatch(response);
    }
    
    fetchData();
    fetchGallery();
  }, []);

  // actions to pass along to components
  const toggle = (disease) => dispatch(actions.toggleDisease(disease));
  const selectImage = (image) => dispatch(actions.selectImage(image));
  const resetToggles = () => dispatch(actions.resetToggles());
  const nextImage = () => dispatch(actions.nextImage());
  const sendData = (data) => dispatch(actions.sendData(data));

  const compActions = { toggle, selectImage, resetToggles, nextImage, sendData };

  const reportProps = { diseases, imageState, toggle, resetToggles };
  const galleryProps = { imageState, selectImage, resetToggles };
  return (
    <Wrapper>
      <Grid>
        <Grid.Column key={1} width={8}><Gallery {...galleryProps}/></Grid.Column>
        <Grid.Column key={2} width={5}><Report {...reportProps}/></Grid.Column>
      </Grid>
    </Wrapper>
  );
}

export default App;
