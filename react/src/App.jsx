import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import HomeFit from './Pages/HomeFit.jsx';
import Login from './Pages/Login.jsx';
import Footers from './Pages/Footers.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/HomeFit" element={<HomeFit />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Login Signup={true} />} />
            <Route path="/Footer/:PageName" element={<Footers />} />
        </Routes>
    );
}

export default App;
