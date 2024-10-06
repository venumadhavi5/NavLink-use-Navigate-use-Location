
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import HomeBoard from './components/HomeBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Flower from './components/Flower';
import Fruits from './components/Fruits';
import Animals from './components/Animals';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/homeboard" element={<HomeBoard/>}></Route>
        <Route path="/flower" element={<Flower/>}></Route>
        <Route path="/fruits" element={<Fruits/>}></Route>
        <Route path="/animals" element={<Animals/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
