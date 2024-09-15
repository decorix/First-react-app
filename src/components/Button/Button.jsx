import './Button.css'
import { useState } from 'react'

function Button() {
  const [text, setText] = useState('Сохранить');
  const clicked = () => {
    // text = 'Закрыть';
    setText(t => t + '!');
    console.log('Hello');
  };

  return (
      <button onClick={clicked} className='button accent'>{ text }</button>
  )
}

export default Button;
