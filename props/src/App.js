import Comentario from "./components/Comentario";
import Saludo from "./components/Saludo";


function App() {
  return (
    <div className="container mt-5">
     <h1>Proyecto desde cero</h1> 
     <Saludo persona='Yamila'/>
     <Saludo persona='Samanta'/>
     <Saludo persona='Begoña'/>
     <hr />
     <h3>Caja de comentarios</h3>
     <Comentario 
     urlImagen='https://picsum.photos/64'
     persona='Yamila'
     texto= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
     />
     <Comentario 
     urlImagen='https://picsum.photos/64'
     persona='Samanta'
     texto= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
     />
     <Comentario 
     urlImagen='https://picsum.photos/64'
     persona='Begoña'
     texto= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
     />
    </div>
  );
}

export default App;
