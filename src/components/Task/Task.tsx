import './Task.css'
import {useState, useEffect} from 'react'

function Task() {

  const [finalizada, setFinalizada] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
      if (finalizada) {
          setTarefa("Parabéns! Você concluiu a tarefa!");
      }

  },[finalizada])

  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>{tarefa}</h3>
        <p>Conclua a tarefa</p>
        <button onClick={() => setFinalizada(true)}>Conclua a Tarefa</button>
    </div>
  )
}

export default Task