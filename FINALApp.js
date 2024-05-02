import logo from './logo.svg';
import './App.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ski1 from './skis1'; // Import the Ski1 component
import Ski2 from './skis2';

function App() {
  return (
    <Router>
       <Routes>
            <Route path="/skiDetails/1" element={<Ski1 />} /> {/* Route for Ski1 details */}
            {/* Add routes for other ski detail pages */}
           
            <Route path="/skiDetails/2" element={<Ski2 />} /> {/* Route for Ski1 details */}
            {/* Add routes for other ski detail pages */}
            </Routes>
    </Router>
);
}

export default App;
