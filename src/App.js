
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LeandingPage from './LeandingPage/LeandingPage/LeandingPage';
import Contact from './LeandingPage/Contact/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LeandingPage/>}/>
        <Route path='Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
