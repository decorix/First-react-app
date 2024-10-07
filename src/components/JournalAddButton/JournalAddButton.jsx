import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css'

function JournalAddButton() {
  return (
      <CardButton className='journal-add flex items-center justify-center text-center p-2.5 gap-2 text-base font-semibold not-italic leading-normal'>
        <img src="/plus.svg"></img>
        Новое воспоминание
      </CardButton>
  )
}

export default JournalAddButton;
