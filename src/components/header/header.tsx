import { Link } from 'react-router-dom'
import './header.scss'
import { img } from '../../images/img'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { stateMenuActive } from '../../store/reducers/state-menu'
// import { useEffect, useState } from 'react'

interface menuTypes {
  'Главная': string,
  'Меню': string,
  'Афиша': string,
  'Сотрудничество': string,
  'Галерея': string,
  'Новости': string,
}

const menuNavigation = ['Главная', 'Меню', 'Афиша', 'Сотрудничество', 'Галерея', 'Новости']

const translationByURL = (string: string) => {
  const menuTranslation: menuTypes= {
    Главная: '/',
    Меню: 'menu',
    Афиша: 'poster',
    Сотрудничество: 'cooperation',
    Галерея: 'gallery',
    Новости: 'news',
  }

  return menuTranslation[string as keyof typeof menuTranslation]
}


// Два типа any. dispatch and stateMenuActive... не знаю как типизировать
const renderMenu = (menuWords: Array<string>, activeMenu: any, dispatch: any, stateMenuActive:any) => {
  localStorage.setItem('test', activeMenu)
  return menuWords.map((word) => {
    return (
      <li 
        id={word} 
        key={word} 
        className='header__navigation'
        // onClick={() => dispatch(word)}
        onClick={() => dispatch(stateMenuActive(word))}
      >
        <Link className={`header__link${word === activeMenu? '-active': ''}`} to={translationByURL(word)}>{word}</Link>
      </li>
    )
  })
}

function Header() {

  const activeMenu = useAppSelector(state => state.stateMenuName.menu)
  const dispatch = useAppDispatch()

  // const [state, setState] = useState('Главная')
  // console.log(state)
  // useEffect(() => {}, [state])

  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={img.logo} alt="Manhatan" />
      </div>
      <nav className='header__menu'>
        <ul className='header__menu-container'>
          {/* {renderMenu(menuNavigation, state, setState, stateMenuActive)} */}
          {renderMenu(menuNavigation, activeMenu, dispatch, stateMenuActive)}
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