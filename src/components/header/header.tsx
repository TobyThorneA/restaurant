import { Link } from 'react-router-dom'
import './header.scss'
import { img } from '../../images/img'

const menuNavigation = ['Главная', 'Меню', 'Афиша', 'Сотрудничество', 'Галерея', 'Новости']

const renderMenu = (menuWords: Array<string>) => {
  return menuWords.map((word) => {
    return (
      <li onClick={() => console.log('Push me')} className='header__navigation'><Link className='header__link' to='/'>{word}</Link></li>
    )
  })
}

function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={img.logo} alt="Manhatan" />
      </div>
      <nav className='header__menu'>
        <ul className='header__menu-container'>
          {renderMenu(menuNavigation)}
        </ul>
        <button className='header__burger-menu'>
          <img className='header__burger-img' src={img.navigation} alt="sdfds" />
        </button>
      </nav>
      <button className='header__reserved'>БРОНИРОВАНИЕ</button>
    </header>
  )
}

export default Header