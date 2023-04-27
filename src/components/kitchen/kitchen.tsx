import { img } from '../../images/img'
import './kitchen.scss'

const Kitchen = () => {
  return (
    <section className='wrapper-kitchen'>
      <div className='wrapper-kitchen__heading'>
        <div className='wrapper-kitchen__leed'>
          <p className='wrapper-kitchen__text'>
            Top “Manhattan” menu
          </p>
        </div>
        <h1 className='wrapper-kitchen__title'>КУХНЯ</h1>
      </div>
      <div className='wrapper-kitchen__menu'>
        <ul className='wrapper-kitchen__dishes'>
          <li className='wrapper-kitchen__dish'>
            <img className='wrapper-kitchen__image-dish' src={img.dish} alt="dish" />
            <div className='wrapper-kitchen__description-dish'>
              <div className='wrapper-kitchen__description-heading'>
                <h3 className='wrapper-kitchen__title-dish'>AMET DONEC</h3>
                <div className='wrapper-kitchen__price-dish'>550р</div>
              </div>
              <p className='wrapper-kitchen__mass-dish'>200гр</p>
              <p className='wrapper-kitchen__description-text'>
              Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.
              </p>
            </div>
          </li>
          <li className='wrapper-kitchen__dish'>
            <img className='wrapper-kitchen__image-dish' src={img.dish} alt="dish" />
            <div className='wrapper-kitchen__description-dish'>
              <div className='wrapper-kitchen__description-heading'>
                <h3 className='wrapper-kitchen__title-dish'>AMET DONEC</h3>
                <div className='wrapper-kitchen__price-dish'>550р</div>
              </div>
              <p className='wrapper-kitchen__mass-dish'>200гр</p>
              <p className='wrapper-kitchen__description-text'>
              Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.
              </p>
            </div>
          </li>
          <li className='wrapper-kitchen__dish'>
            <img className='wrapper-kitchen__image-dish' src={img.dish} alt="dish" />
            <div className='wrapper-kitchen__description-dish'>
              <div className='wrapper-kitchen__description-heading'>
                <h3 className='wrapper-kitchen__title-dish'>AMET DONEC</h3>
                <div className='wrapper-kitchen__price-dish'>550р</div>
              </div>
              <p className='wrapper-kitchen__mass-dish'>200гр</p>
              <p className='wrapper-kitchen__description-text'>
              Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.
              </p>
            </div>
          </li>
          <li className='wrapper-kitchen__dish'>
            <img className='wrapper-kitchen__image-dish' src={img.dish} alt="dish" />
            <div className='wrapper-kitchen__description-dish'>
              <div className='wrapper-kitchen__description-heading'>
                <h3 className='wrapper-kitchen__title-dish'>AMET DONEC</h3>
                <div className='wrapper-kitchen__price-dish'>550р</div>
              </div>
              <p className='wrapper-kitchen__mass-dish'>200гр</p>
              <p className='wrapper-kitchen__description-text'>
              Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.
              </p>
            </div>
          </li>
        </ul>
        <ul className='wrapper-kitchen__dishes'>
        <li className='wrapper-kitchen__dish'>
            <img className='wrapper-kitchen__image-dish' src={img.dish} alt="dish" />
            <div className='wrapper-kitchen__description-dish'>
              <div className='wrapper-kitchen__description-heading'>
                <h3 className='wrapper-kitchen__title-dish'>AMET DONEC</h3>
                <div className='wrapper-kitchen__price-dish'>550р</div>
              </div>
              <p className='wrapper-kitchen__mass-dish'>200гр</p>
              <p className='wrapper-kitchen__description-text'>
              Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.
              </p>
            </div>
          </li>
          <li className='wrapper-kitchen__dish'>
            <img className='wrapper-kitchen__image-dish' src={img.dish} alt="dish" />
            <div className='wrapper-kitchen__description-dish'>
              <div className='wrapper-kitchen__description-heading'>
                <h3 className='wrapper-kitchen__title-dish'>AMET DONEC</h3>
                <div className='wrapper-kitchen__price-dish'>550р</div>
              </div>
              <p className='wrapper-kitchen__mass-dish'>200гр</p>
              <p className='wrapper-kitchen__description-text'>
              Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.
              </p>
            </div>
          </li>
          <li className='wrapper-kitchen__dish'>
            <img className='wrapper-kitchen__image-dish' src={img.dish} alt="dish" />
            <div className='wrapper-kitchen__description-dish'>
              <div className='wrapper-kitchen__description-heading'>
                <h3 className='wrapper-kitchen__title-dish'>AMET DONEC</h3>
                <div className='wrapper-kitchen__price-dish'>550р</div>
              </div>
              <p className='wrapper-kitchen__mass-dish'>200гр</p>
              <p className='wrapper-kitchen__description-text'>
              Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.
              </p>
            </div>
          </li>
          <li className='wrapper-kitchen__dish'>
            <img className='wrapper-kitchen__image-dish' src={img.dish} alt="dish" />
            <div className='wrapper-kitchen__description-dish'>
              <div className='wrapper-kitchen__description-heading'>
                <h3 className='wrapper-kitchen__title-dish'>AMET DONEC</h3>
                <div className='wrapper-kitchen__price-dish'>550р</div>
              </div>
              <p className='wrapper-kitchen__mass-dish'>200гр</p>
              <p className='wrapper-kitchen__description-text'>
              Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.
              </p>
            </div>
          </li>
        </ul>
        <div className='wrapper-kitchen__dishes-mobile'>
          <img className='wrapper-kitchen__image-dish' src={img.dish} alt="dish" />
        </div>
      </div>
      <button className='wrapper-kitchen__all-menu-button'>ВСЕ МЕНЮ</button>
      <button className='wrapper-kitchen__previos-menu-button'>{'<'}</button>
      <button className='wrapper-kitchen__next-menu-button'>{'>'}</button>
    </section>
  )
}

export default Kitchen