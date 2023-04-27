import { img } from '../../images/img'
import './events.scss'

function Events() {
  return (
    <section className='events-wrapper'>
      <div className='events-wrapper__events-turists'>
        <div className='events-wrapper__leed'>Top “Manhattan” events</div>
        <h3 className='events-wrapper__title'>Банкеты</h3>
        <div className='events-wrapper__wrapper-text'>
          <p className='events-wrapper__text'>
            Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet. 
          </p>
          <p className='events-wrapper__text'>
            Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris.  
          </p> 
          <p className='events-wrapper__text'>
            Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.
          </p>
        </div>
        <button className='events-wrapper__button'>ПОДРОБНЕЕ</button>
      </div>
      <div className='events-wrapper__image'>
        <img src={img.event} alt="" />
      </div>
      <div className='events-wrapper__events-turists'>
        <div className='events-wrapper__leed'>Top “Manhattan” tourists</div>
        <h3 className='events-wrapper__title'>ТУРИСТЫ</h3>
        <div className='events-wrapper__wrapper-text'>
          <p className='events-wrapper__text'>
            Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet. 
          </p>
          <p className='events-wrapper__text'>
            Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris.  
          </p> 
          <p className='events-wrapper__text'>
            Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.
          </p>
        </div>
        <button className='events-wrapper__button'>ПОДРОБНЕЕ</button>
      </div>
    </section>
  )
}

export default Events