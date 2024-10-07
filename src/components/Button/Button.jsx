import './Button.css';
import { useState } from 'react';

function Button() {
  const [text, setText] = useState('Сохранить');

  const clicked = () => {
    text != 'Закрыть' ? setText('Закрыть') : setText('Сохранить');
  }

  return (
    <button onClick={clicked} className="rounded-md py-2 px-[30px] font-inherit cursor-pointer transition-background duration-250 text-base border-none bg-btn hover:bg-[#222096]">{text}</button>
  );
}

export default Button;
