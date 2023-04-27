import './contacts.scss'

function Contacts() {
  return (
    <section className='wrapper-footer'>
      <div className='wrapper-footer__heading'>
        <div className='wrapper-footer__leed'>
          Top “Manhattan” place
        </div>
        <h3 className='wrapper-footer__title'>контакты</h3>
      </div>
      <div className='wrapper-footer__wrapper-contacts'>
        <div className='wrapper-footer__contacts'>
          <div className='wrapper-footer__adress'>
            <h3 className='wrapper-footer__adress-title'>
              Адрес
            </h3>
            <p className='wrapper-footer__adress-text'>
              Набережная реки Фонтанки, 90 (вход в арке с белыми колоннами)
            </p>
          </div>
          <div className='wrapper-footer__adress height'>
            <h3 className='wrapper-footer__adress-title'>
              телефон
            </h3>
            <p className='wrapper-footer__adress-text'>
              +7 (812) 000-0000
            </p>
          </div>
          <div className='wrapper-footer__adress height'>
            <h3 className='wrapper-footer__adress-title'>
              режим работы
            </h3>
            <p className='wrapper-footer__adress-text'>
              Ежедневно с 12:00 до 06:00
            </p>
          </div>
          <div className='wrapper-footer__dash'></div>
          <div className='wrapper-footer__adress height'>
            <h3 className='wrapper-footer__adress-title'>
              режим работы
            </h3>
            <p className='wrapper-footer__adress-text'>
              Ежедневно с 12:00 до 06:00
            </p>
          </div>
          <div className='wrapper-footer__adress height'>
            <h3 className='wrapper-footer__adress-title'>
              режим работы
            </h3>
            <p className='wrapper-footer__adress-text'>
              Ежедневно с 12:00 до 06:00
            </p>
          </div>
        </div>
        <div className='wrapper-footer__map'>
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A0b3633538241cd5b66afc593b035cdb414a4f8e5111b19e9959556732aad1e87&amp;source=constructor" 
            width="850"
            height="650"
            title='map-yandex'>
          </iframe>
        </div>
      </div>
      <div className='wrapper-footer__line'></div>
      <div className='wrapper-footer__footer-wrapper-text'>
        <p className='wrapper-footer__footer-text'>
          Copyright © 2022. Все права защищены.
        </p>
        <p className='wrapper-footer__footer-text'>
          Разработано d-e-n.ru
        </p>
      </div>
    </section>
  )
}

export default Contacts
