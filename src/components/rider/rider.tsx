import { img } from '../../images/img'
import './rider.scss'
import {Link} from 'react-router-dom'

function Rider() {
  return (
    <section className='wrapper-rider'>
      <div className='wrapper-rider__heading'>
        <div className='wrapper-rider__leed'>
          Top “Manhattan” party
        </div>
        <h3 className='wrapper-rider__title'>ТЕХРАЙДЕР</h3>
      </div>
      <div className='wrapper-rider__content-container'>
        <div className='wrapper-rider__lists'>
          <div className='wrapper-rider__container-active'>
            <div className='wrapper-rider__container-name'>
              <h3 className='wrapper-rider__name'>Loudspeakers</h3>
              <div className='wrapper-rider__arrow-wrapper'>
                <p className='wrapper-rider__arrow' >{'>'}</p>
              </div>
            </div>
            <div className='wrapper-rider__wrapper-list'>
              <ul className='wrapper-rider__list-active'>
                <li>Acoustic system BELL Top 600W x 2</li>
                <li>Acoustic system BELL Mid 600W x 2</li>
                <li>Acoustic system BELL Sub 1000W x 2</li>
                <li>Front monitor Yamaha SM12V 300w x 2</li>
                <li>Backside monitor Dynacord 500W x 2 </li>
              </ul>
            </div>
          </div>
          <div className='wrapper-rider__container'>
            <div className='wrapper-rider__container-name'>
              <h3 className='wrapper-rider__name'>Loudspeakers</h3>
              <div className='wrapper-rider__arrow-wrapper'>
                <p className='wrapper-rider__arrow' >{'>'}</p>
              </div>
            </div>
            <div className='wrapper-rider__wrapper-list'>
              <ul className='wrapper-rider__list'>
                <li>Acoustic system BELL Top 600W x 2</li>
                <li>Acoustic system BELL Mid 600W x 2</li>
                <li>Acoustic system BELL Sub 1000W x 2</li>
                <li>Front monitor Yamaha SM12V 300w x 2</li>
                <li>Backside monitor Dynacord 500W x 2 </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='wrapper-rider__sound-engeniers'>
          <div className='wrapper-rider__engeniers-title'>
            <h3 className='wrapper-rider__engeniers-text'>
              Звукорежиссеры клуба МАНХЭТТЕН
            </h3>
            <div className='wrapper-rider__engeniers-contacts'>
              <div className='wrapper-rider__engeniers-data'>
                <img className='wrapper-rider__engeniers-photo' src={img.engeniersPhoto.izotov} alt="izotov" />
                <p className='wrapper-rider__engeniers-name'>Изотов Константин</p>
              </div>
              <div className='wrapper-rider__engeniers-data' >
                <img className='wrapper-rider__engeniers-photo' src={img.engeniersPhoto.xoziev} alt="xoziev" />
                <p className='wrapper-rider__engeniers-name'>Давид Хозиев</p>
                <div className='wrapper-rider__messengers-wrapper'>
                  <Link to='/' className='wrapper-rider__messengers-link'>
                    {/* <img src={img} alt="" /> */}
                  </Link>
                  <Link to='/' className='wrapper-rider__messengers-link'></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rider
