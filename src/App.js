import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Apropos from "./pages/apropos/Apropos";
import ConditionGdevente from "./pages/conditionGdevente/ConditionGdevente";
import Conditionpolitique from "./pages/conditionpolitique/Conditionpolitique";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Societe from "./pages/societe/Societe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/societe" element={<Societe/>} />
        <Route path="/apropos" element={<Apropos/>} />
        <Route path="/conditionpolitique" element={<Conditionpolitique/>} />
        <Route path="/conditionGdevente" element={<ConditionGdevente/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
