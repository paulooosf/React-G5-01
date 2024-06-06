import { Route, Routes } from "react-router-dom";
import Erro from "../pages/Erro";
import Exercicio1 from "../pages/Exercicio1";
import Exercicio2 from "../pages/Exercicio2";
import Exercicio3 from "../pages/Exercicio3";
import Exercicio4 from "../pages/Exercicio4";
import Principal from "../pages/Principal";

function AppRouter() {
  return (
    <Routes>
     <Route path="/" element={<Principal/>}/>
     <Route path="/exercicio1" element={<Exercicio1/>}/>
     <Route path="/exercicio2" element={<Exercicio2/>}/>
     <Route path="/exercicio3" element={<Exercicio3/>}/>
     <Route path="/exercicio4" element={<Exercicio4/>}/>
     <Route path="*" element={<Erro/>}/>
    </Routes>
  );
}

export default AppRouter;