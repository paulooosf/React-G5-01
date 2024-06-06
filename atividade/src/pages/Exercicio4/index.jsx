import './style.css'
import { useEffect, useState } from 'react';

const colors = ["", "#ffff00", "#0000ff", "#008000", "#ff0000"]

function Exercicio4() {
  const [position, setPosition] = useState(0)
  const [cor, setCor] = useState(colors[position])

  const click = () => {
    if(position === colors.length -1)
    setPosition(1)
    else setPosition(position + 1)
  }

  useEffect(()=>{
    setCor(colors[position])
  }, [position])

  return (
    <div className='Exercicio4' style={{backgroundColor: cor}}>
      <button className='botao' onClick={click}>Mude a cor!</button>
      <p className='texto'>{cor}</p>
    </div>
  );
}

export default Exercicio4;