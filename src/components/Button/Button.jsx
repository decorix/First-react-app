import './Button.css';

function Button({ text }) {

  return (
    <button className="rounded-md py-2 px-[30px] 
    font-inherit cursor-pointer transition-background duration-250 
    text-base border-none bg-btn hover:bg-[#222096]">{text}</button>
  );
}

export default Button;
