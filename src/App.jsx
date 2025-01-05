import { useEffect } from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
// import ContactForm from './Components/ContactForm/ContactForm';
 import ContactPage from './Pages/ContactPage/ContactPage';


const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect( () => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


const App = () => {
    return (
        <Router hashType="slash">
            <ScrollToTop/>
            <Routes>
                <Route path="/" exact element={<Homepage/> }/>
                <Route path="/home" element={<Homepage />} />
                <Route path="/about" element={<AboutUsPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
            </Routes>
      </Router>
    );
}

export default App;
