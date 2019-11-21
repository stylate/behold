import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import actions from './actions/actions';

import Report from './components/Report';

const App = () => {
  const diseases = useSelector(state => state.options);
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(actions.fetchInitial());
    // dispatch(actions.fetchGallery()); // pre-load images; not complete yet
  }, []);

  const toggle = (disease) => dispatch(actions.toggleDisease(disease));
  const reportProps = { diseases, toggle }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Report {...reportProps}/>
      </header>
    </div>
  );
}

export default App;
