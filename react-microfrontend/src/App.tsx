import React, { Suspense } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
// import Counter from './components/Counter';
const Counter = React.lazy(() => import('./components/Counter'));
import CreateTask from './components/CreateTask';
import Home from './components/Home';

// singleSpaReact injects a name prop on our root component
const App = ({ name }) => {
  // this basename must be the <route path="react"> you defined on
  // microfrontend-layout root-config/src/microfrontend-layout.html
  // routes on the root config project.
  return (
    <BrowserRouter basename="react">
      <h2>App name: {name}</h2>
      <ul>
        <li>
          <Link to="/create-task">Create Task</Link>
        </li>
        <li>
          <Link to="/counter">Counter </Link>
        </li>
      </ul>
      <Suspense fallback={<div className="centered">Carregando...</div>}>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/counter" element={<Counter />} />
          <Route path="create-task" element={<CreateTask />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
