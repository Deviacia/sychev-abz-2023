import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PageLayout from './layouts/PageLayout';
import Home from './routes/Home/Home';

const App = () => {
  return (
    <Routes>
      <Route path={`/`} element={<PageLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  );
};

export default App;
