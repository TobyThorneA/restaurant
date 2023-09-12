import { img } from '../../images/img'
import Kitchen from '../kitchen/kitchen'
import Events from '../events-and-tourists/events'
import './main.scss'
import Rider from '../rider/rider'
import Contacts from '../contacts/contacts'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { stateClassBilbord } from '../../store/reducers/state-menu'

const arrNamePosts = ['Ближайшие', 'Скоро']



function Main() {

  const stateBilbord = useAppSelector((state) => state.stateMenuName.stateBilbord)
  const dispatch = useAppDispatch()

  return (
    <div className='wrapper'> 
      <section className='wrapper-main'>
        <div className='wrapper-main__first-screen'>
          <img className='wrapper-main__rectangle' src={img.rectangle} alt="rectangle" />
        </div>
        <div className='wrapper-main__announcements'>

        <div>{arrNamePosts.map((it) => {
          return (
            <button 
              className={`wrapper-main__buttons ${it === stateBilbord? '' : 'soon'}`}
              key={it}
              id={it}
              onClick={(e) => {
                  dispatch(stateClassBilbord(e.currentTarget.id))
              }}
            >
              {it}
            </button>
          )
        })
          }</div>
        <ul className='wrapper-main__announcements-card'>
          <li className='wrapper-main__card-wrapper'>
            <img src={img.main.fishs} alt="kjm" />
          </li>
          <li className='wrapper-main__card-wrapper'>
            <img src={img.main.final} alt="kjm" />
          </li>
          <li className='wrapper-main__card-wrapper'>
            <img src={img.main.fontanka} alt="kjm" />
          </li>
          <li className='wrapper-main__card-wrapper'>
            <img src={img.main.grace} alt="kjm" />
          </li>
        </ul>
        </div>
      </section>
      <Kitchen/>
      <Events/>
      <Rider/>
      <Contacts/>
    </div>
  )
}

export default Main