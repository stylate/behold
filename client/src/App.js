import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import actions from './actions/actions';

import { Report, Gallery } from './components';

const App = () => {
  const diseases = useSelector(state => state.toggle.options);
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
  }, []);

  const toggle = (disease) => dispatch(actions.toggleDisease(disease));
  const reportProps = { diseases, toggle }
  return (
    <div className="App">
      <header className="App-header">
        <Report {...reportProps}/>
      </header>
    </div>
  );
}

export default App;
