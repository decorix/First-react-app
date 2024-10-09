import { useState } from 'react';
import Button from '../Button/Button';

function JournalForm(){
    const [inputData, setInputData] = useState('');

    const inputChange = (event) => {
      setInputData(event.target.value);
      console.log(inputData);
    }
  
    return (
        <>
        <form className="journal-form flex gap-[30px] flex-col"></form>
            <input type="date"/>
            <input type="text" onChange={inputChange} value={inputData}/>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <Button/>
        </>
    );
}

export default JournalForm;