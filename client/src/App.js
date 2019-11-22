import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import actions from './actions/actions';

import { Report, Gallery } from './components';

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

  const reportProps = { diseases, toggle };
  const galleryProps = { imageState, selectImage };
  return (
    <div className="App">
      <header className="App-header">
        <Report {...reportProps}/>
        <Gallery {...galleryProps}/>
      </header>
    </div>
  );
}

export default App;
