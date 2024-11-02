// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import EventList from './components/EventList';
import AddEditEvent from './components/AddEditEvent';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/add" element={<AddEditEvent />} />
        <Route path="/edit/:id" element={<AddEditEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
