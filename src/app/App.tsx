import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../components/main/main';
import './App.scss';
import Menu from '../components/menu/menu';
import Poster from '../components/poster/poster';
import Cooperation from '../components/cooperation/cooperation';
import Gallery from '../components/gallery/gallery';
import News from '../components/news/news';
import Header from '../components/header/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/restaurant' element={<Main/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/poster' element={<Poster/>}/>
          <Route path='/cooperation' element={<Cooperation/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/news' element={<News/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
