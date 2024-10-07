import './JournalItem.css'

function JournalItem({ data }) {
    const formatedDate = new Intl.DateTimeFormat('ru-RU').format(data.date);
    return (
        <>
            <h2 className='journal-item__header text-lg not-italic font-semibold leading-7'>{data.title}</h2>
            <h2 className='journal-item__body flex gap-2.5'>
                <div className='journal-item__date text-[#ffffff66] text-base not-italic font-normal leading-normal'>{formatedDate}</div>
                <div className='journal-item__text text-[#ffffff99] text-base not-italic font-normal leading-normal truncate'>{data.text}</div>
            </h2>
        </>
    )
}

export default JournalItem;