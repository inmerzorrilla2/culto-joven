import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DanielsPray from './components/DanielsPray'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        
      
      <h1>Culto Joven</h1>
      <h2>"Secretos de la oración de Daniel"</h2>
      <p>Sábado 15 de junio de 2024</p>
      <p>Por: Inmer Zorrilla</p>
      <hr />
      <br />
      <img className='daniel' src="./assets/daniel.jpeg" alt="Daniel" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
         Atributos de Daniel: {count}
        </button>
        <p className='points'>* * * * * * * * * * * * * * * * * * </p>
        <p>
          <em className='atributes'> ¿Cuáles son mis atributos? </em>
        </p>
        <br />
        <br />
        <DanielsPray/>
      </div>
      <br />

      
      <strong className='Ellen'>Elena G. de White: </strong> 
      <br />
      <br />
      <p className="read-the-docs">
      <em>
      "La mayor necesidad del mundo es la de hombres que no se vendan ni se compren; hombres que sean sinceros y honrados en lo más íntimo de sus almas; hombres que no teman dar al pecado el nombre que le corresponde; hombres cuya conciencia sea tan leal al deber como la brújula al polo; hombres que se mantengan de parte de la justicia aunque se desplomen los cielos". (La educación, p. 57)
      </em>
      </p>
      <p className='points'>* * * * * * * * * * * * * * * * * *  </p>
      
      <p><strong>"Todo es difícil -- hasta que lo aprendes </strong></p>
      
      <p><strong> y todo da miedo -- hasta que lo conoces"</strong></p>
      <em>
      
      <span>Prof. Wilber Millán, mi profesor de React.</span>
      </em>
      </div>
    </>

  )

}


export default App
