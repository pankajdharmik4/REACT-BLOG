import './header.css'

export default function Header() {
  return (
    <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerimg' src="https://images.unsplash.com/photo-1541363111435-5c1b7d867904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVtbXl8ZW58MHx8MHx8" alt="" />
    </div>
  )
}
