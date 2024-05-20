import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/globals.scss";
import React from 'react';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
      <React.Fragment>
          <div className="App">
            <AppRoutes />
          </div>
      </React.Fragment>
  );
}

export default App;
