import { useState } from 'react';
import Button from '../Button/Button';

function JournalForm(){
    const [inputData, setInputData] = useState('');

    const inputChange = (event) => {
      setInputData(event.target.value);
      console.log(inputData);
    }
    
    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);
    }

    return (
        <>
        <form className="journal-form flex gap-[30px] flex-col" onSubmit={addJournalItem}>
            <input type="title" name="title"/>
            <input type="date" name="date"/>
            <input type="text" name="tag" onChange={inputChange} value={inputData}/>
            <textarea name="post" id="" cols="30" rows="10"></textarea>
            <Button
            text="Сохранить"
            />
        </form>
        </>
    );
}

export default JournalForm;