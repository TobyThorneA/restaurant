import { img } from '../../images/img'
import Header from '../header/header'
import Kitchen from '../kitchen/kitchen'
import Events from '../events-and-tourists/events'
import './main.scss'
import Rider from '../rider/rider'
import Contacts from '../contacts/contacts'

function Main() {
  return (
    <div className='wrapper'>
      <Header/>
      <section className='wrapper-main'>
        <div className='wrapper-main__first-screen'>
          <img className='wrapper-main__rectangle' src={img.rectangle} alt="rectangle" />
        </div>
        <div className='wrapper-main__announcements'>
          
        <button className='wrapper-main__buttons'>Ближайшие</button>
        <button className='wrapper-main__buttons soon'>Скоро</button>
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