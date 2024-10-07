import './Body.css'

function Body({ children }) {
  return (
      <div className='body p-[50px]'>
        { children }
      </div>
  )
}

export default Body;
