import Title from "./components/title/title.js";
import Picture from "./components/picture/picture.js";
import Info from "./components/Info/info.js";
import img1 from "./components/picture/img/img1.png";
import img2 from "./components/picture/img/img2.png";
 
import './App.css';
 

function App() {
  return (
    <div className="text-center" >



      <Title _h1={"Mon titre"} _p={"Mon paragra"}/>
      <Picture _src1={img1} _src2={img2} />



      <Info _src={img1} _nom={"idriss"} _taille={"179"} _age={"23"}/>

    </div>
  );
}

export default App;
