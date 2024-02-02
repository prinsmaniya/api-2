import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Post';
import Comments from './Comments';
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Albums from './Albums';
import Todos from './Todos';
import Photos from './Photos';

function App() {
  
  return (
    <>
     <Routes>
        <Route path="/" element={ <Header/> } />
        <Route path="/Post" element={ <Post/> } />
        <Route path="/Comments" element={ <Comments/> } />
        <Route path="/Albums" element={ <Albums/> } />
        <Route path="/Photos" element={ <Photos/> } />
        <Route path="/Todos" element={ <Todos/> } />
      </Routes>
    </>
  );
}

export default App;