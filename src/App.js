import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
import MainContent from './components/BodyContent/Bodycontent';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/Login/Login';
import RegistroPage from './pages/Registro/Registro';
import { Route, Routes } from 'react-router-dom';
import CheckedPage from './pages/Checked/Checked';


function App() {
  return (
    <div className="container">
      <Header />
      <div className='content'>
        <LeftSidebar />
        <RightSidebar />

        <MainContent>
        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registro" element={<RegistroPage />} />
            <Route path="/checked" element={<CheckedPage/>} />
          </Routes>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}

export default App;
