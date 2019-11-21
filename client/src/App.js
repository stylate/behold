import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import actions from './actions/actions';

import Report from './components/Report';

const App = () => {
  const diseases = useSelector(state => state.options);
  const dispatch = useDispatch();
  useEffect( () => {
    const fetchData = async () => {
      const response = await actions.fetchInitial();
      console.log("response: ", response);
      dispatch(response);
    }
    
    fetchData();
    // dispatch(actions.fetchGallery()); // pre-load images; not complete yet
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
