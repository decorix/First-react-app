import './JournalList.css'

function JournalList({children}) {
  return (
      <div className='journal-list flex flex-col gap-[30px]'>{children}</div>
  )
}

export default JournalList;
