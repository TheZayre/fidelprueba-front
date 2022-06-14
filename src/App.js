import {Apis} from "./domain/Apis";
import Header from "./view/header/Header";
import NewsScreen from "./view/newsScreen/NewsScreen";
import ArchiveScreen from "./view/archiveScreen/ArchiveScreen";
import {VM} from './viewmodel/VM';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  //Inicialización de Viewmodel y Apis.
  Apis.initialize();
  VM.initialize();

  //Declaracion de los paths del enrutamiento.
  return (
    <Router>
      <div>
        <Header style={{zIndex:5}}/>
        <Routes>
          <Route path="/" element={<NewsScreen/>}/>
          <Route path="/news" element={<NewsScreen/>}/>
          <Route path="/archive" element={<ArchiveScreen/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
