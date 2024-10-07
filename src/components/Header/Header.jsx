import './Header.css'

function Header({ children }) {
  return (
      <img className="logo w-[180px]" src="/logo.svg" alt="Personal Journal"></img>
  )
}

export default Header;
