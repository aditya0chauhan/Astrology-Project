import hastlikhit from '../../assets/images/hastlikhit.png'
import vastu from '../../assets/images/vaastu.png'
import Kalsarap from '../../assets/images/kalsarap.png'
import kp from '../../assets/images/kp-removebg-preview.png'
import name from '../../assets/images/name.png'
import ratna from '../../assets/images/ratna.png'
import poojan1 from '../../assets/images/poojan-1.png'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Book, Whatsapp } from '../../utils/buttons/Genrate'

export const PremiumCard = () => {
  const { t } = useTranslation()

  return (
    <StyledWrapper>
      <div className="container">
        <div className="card_box">
          <div className="card__text">
            <img className="card__image hover:scale-[1.10] duration-300" src={hastlikhit} alt={t('hlh')} />
            <p className="card__title">{t('hlh')}</p>
            <p className="card__description">{t('hl')}</p>
          </div>
          <div className="card__footer">
            <p className="card__price-text">₹-11,000</p>
            <a href="https://wa.me/918882532259?text=🙏%20Namaste%20Manoj%20Guru%20Ji,%0A%0AMujhe%20*Handwritten%20Kundali*%20chahiye%20hai%20to%20Kripya%20delivery%20time,%20aur%20order%20process%20batayein.%0A%0ADhanyavaad." target='blank'><Whatsapp /></a>
            </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export const Card2 = () => {
  const { t } = useTranslation()

  return (
    <StyledWrapper>
      <div className="container">
        <div className="card_box">
          <div className="card__text">
            <img className="card__image hover:scale-[1.10] duration-300" src={vastu} alt={t('v1h')} />
            <p className="card__title">{t('v1h')}</p>
            <div className="card__section">
              <h1 className="card__section-title">1. 🕉️ {t('sol1')}</h1>
              <ul className="card__list">
                <li className="card__line">{t('kit')} <strong>₹7,100</strong></li>
                <li className="card__line">{t('kit2')} <strong>₹3,100</strong></li>
              </ul>
            </div>
            <div className="card__section">
              <h1 className="card__section-title">2. 🕉️ {t('sol2')}</h1>
              <p className="card__line">{t('kit3')} <strong>₹21,000</strong></p>
            </div>
            <div className="card__section">
              <h1 className="card__section-title">3. 🕉️ {t('sol3')}</h1>
              <p className="card__line">{t('kit4')} <strong>₹51,000</strong></p>
            </div>
          </div>
          <div className="card__footer">
            <p className="card__price-text"> Package According</p>
              <a href="https://wa.me/918882532259?text=🙏%20Namaste%20Manoj%20Guru%20Ji,%0A%0AMujhe%20*Complete%20Vastu%20Defect%20Remedy*%20service%20ke%20baare%20mein%20jaankari%20chahiye.%20Kripya%20consultation,%20charges%20aur%20Vastu%20remedies%20ke%20baare%20mein%20guide%20kijiye.%0A%0ADhanyavaad." target='blank'><Whatsapp /></a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export const Card3 = () => {
  const { t } = useTranslation()

  return (
    <StyledWrapper>
      <div className="container">
        <div className="card_box">
          <div className="card__text">
            <img className="card__image hover:scale-[1.10] duration-300" src={Kalsarap} alt={t('k1h')} />
            <p className="card__title">{t('k1')}</p>
            <p className="card__title">{t('k1h')}</p>
            <div className="card__section">
              <p className="card__line">{t('kld')}</p>
              <ul className='mt-2'>
                <h1 className='font-semibold text-green-400'>{t("ks")}</h1>
                <li>{t("kl1")}</li>
                <li>{t("kl2")}</li>
                <li>{t("kl3")}</li>
                <li>{t("kl4")}</li>
              </ul>
            </div>
          </div>
          <div className="card__footer">
            <p className="card__price-text"> ₹-499</p>
          <a href="https://wa.me/918882532259?text=🙏%20Namaste%20Manoj%20Guru%20Ji,%0A%0AMujhe%20*Kaalsarp%20Dosh%20Consultation*%20ke%20baare%20mein%20jaankari%20chahiye.%20Kripya%20consultation%20process,%20upaay%20ke%20baare%20mein%20batayein.%0A%0ADhanyavaad." target='blank'><Whatsapp /></a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export const Card4 = () => {
  const { t } = useTranslation()

  return (
    <StyledWrapper>
      <div className="container">
        <div className="card_box">
          <div className="card__text">
            <img className="card__image hover:scale-[1.10] duration-300" src={kp} alt={t('kp1h')} />
            <p className="card__title">{t('kp1')}</p>
            <p className="card__title">{t('kp1h')}</p>
            <div className="card__section">
              <p className="card__line">{t('kpld')}</p>
              <ul className='my-2'>
                <h1 className='font-semibold text-green-400'>{t("ks")}</h1>
                <li>✨ {t("kpk1")}</li>
                <li>{t("kl3")}</li>
                <li>{t("kl4")}</li>
              </ul>
            </div>
          </div>
          <div className="card__footer">
            <p className="card__price-text"> ₹-2,100</p>
           <a href="https://wa.me/918882532259?text=🙏%20Namaste%20Manoj%20Guru%20Ji,%0A%0AMujhe%20*KP%20Premium%20Kundali*%20ke%20baare%20mein%20vistaar%20se%20jaankari%20chahiye.%20Kripya%20KP%20analysis,%20consultation%20process%20aur%20is%20service%20ke%20baare%20mein%20guide%20kijiye.%0A%0ADhanyavaad."target='blank'><Whatsapp /></a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export const Card5 = () => {
  const { t } = useTranslation()

  return (
    <StyledWrapper>
      <div className="container">
        <div className="card_box">
          <div className="card__text">
            <img className="card__image hover:scale-[1.10] duration-300" src={name}
            />
            <p className="card__title">{t('ch')}</p>
            <div className="card__section">
              <p className="card__line">{t('chd')}</p>
              <ul >
                <h1 className='my-2 font-semibold text-green-400'>{t("chh")}</h1>
                <li>{t("ch1")}</li>
                <li>{t("ch2")}</li>
                <li>{t("ch3")}</li>
                <li>{t("ch4")}</li>
              </ul>
            </div>
          </div>
          <div className="card__footer">
            <p className="card__price-text"> ₹-151</p>
           <a href="https://wa.me/918882532259?text=🙏%20Namaste%20Manoj%20Guru%20Ji,%0A%0AMujhe%20*Children's%20Name%20Selection*%20service%20ke%20baare%20mein%20jaankari%20chahiye.%20Main%20janam%20vivaran%20ke%20anusaar%20apne%20bachche%20ke%20liye%20ek%20shubh,%20arthpoorn%20aur%20vaidik%20naam%20rakhna%20chahta/chahti%20hoon.%20Kripya%20mujhe%20guide%20kijiye.%0A%0ADhanyavaad."target='blank'><Whatsapp /></a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export const Card6 = () => {
  const { t } = useTranslation()

  return (
    <StyledWrapper>
      <div className="container">
        <div className="card_box">
          <div className="card__text">
            <img className="card__image hover:scale-[1.10] duration-300" src={ratna}
            />
            <p className="card__title">{t('rt')}</p>
            <div className="card__section">
              <p className="card__line">{t('rtd')}</p>
              <ul >
                <h1 className='my-2 font-semibold text-green-400'>{t("rth")}</h1>
                <li>{t("rt1")}</li>
                <li>{t("rt2")}</li>
                <li>{t("rt3")}</li>
                <li>{t("rt4")}</li>
              </ul>
            </div>
          </div>
          <div className="card__footer">
            <p className="card__price-text"> ₹-251</p>
           <a href="https://wa.me/918882532259?text=🙏%20Namaste%20Manoj%20Guru%20Ji,%0A%0AMujhe%20*Gemstone%20Recommendation*%20service%20ke%20baare%20mein%20jaankari%20chahiye.%20Kripya%20meri%20janma%20kundali%20ke%20anusaar%20uchit%20ratna,%20use%20dharan%20karne%20ki%20vidhi%20aur%20paramarsh%20ke%20baare%20mein%20guide%20kijiye.%0A%0ADhanyavaad."target='blank'><Whatsapp /></a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export const Card7 = () => {
  const { t } = useTranslation()

  return (
    <StyledWrapper>
      <div className="container">
        <div className="card_box">
          <div className="card__text">
            <img className="card__image hover:scale-[1.10] duration-300" src='https://t4.ftcdn.net/jpg/20/74/94/15/360_F_2074941588_hGgWfYME1iUru6fnNYm2YJ1yY0krfftb.jpg'
            />
            <p className="card__title">{t('svp')}</p>
            <div className="card__section">
              <p className="card__line">{t('svd')}</p>
              <ul >
                <h1 className='my-2 font-semibold text-green-400'>{t("svh1")}</h1>
                <li>{t("sv1")}</li>
                <li>{t("sv2")}</li>
                <li>{t("sv3")}</li>
                <li>{t("sv4")}</li>
              </ul>
              <h1 className='my-2 font-semibold text-green-400'>{t("svh2")}</h1>
            </div>
          </div>
          <div className="card__footer">
            <p className="card__price-text"> ₹-7100</p>
            <a
              href="https://wa.me/918882532259?text=🙏%20Namaste%20Pandit%20Ji,%0A%0AMujhe%20*Shravan%20Maas%20Shiv%20Pujan%20Rudrabhishek*%20ke%20baare%20mein%20jaankari%20chahiye.%0A%0AKripya%20mujhe%20is%20pooja%20ki%20poori%20jaankari%20de."
              target="_blank"
              rel="noopener noreferrer"
              className="..."
            >
             <Whatsapp />
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}


export const P1 = () => {
  const { t } = useTranslation()

  return (
    <StyledWrapper>
      <div className="container">
        <div className="card_box">
          <div className="card__text">
            <img className="card__image hover:scale-[1.10] duration-300"
              src={poojan1}
            />
            <p className="card__title">{t('rt')}</p>
            <div className="card__section">
              <p className="card__line">{t('rtd')}</p>
              <ul >
                <h1 className='my-2 font-semibold text-green-400'>{t("rth")}</h1>
                <li>{t("rt1")}</li>
                <li>{t("rt2")}</li>
                <li>{t("rt3")}</li>
                <li>{t("rt4")}</li>
              </ul>
            </div>
          </div>
          <div className="card__footer">
            <p className="card__price-text"> ₹-251</p>
            <Book />
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .container {
    display: flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    max-width: 360px;
  }

  .card_box {
    width: 100%;
    min-height: 540px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 24px;
    background:
    linear-gradient(
      to bottom right,
      #1f2937 0%,
      #111827 55%,
      #0f172a 100%
    );
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
    padding: 1rem;
    box-sizing: border-box;
    position: relative;
  }

  .card_box::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, rgba(251, 191, 36, 0.45), rgba(16, 185, 129, 0.2));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .card_box:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 24px 50px rgba(251, 191, 36, 0.18);
    border-color: rgba(251, 191, 36, 0.45);
  }

  .card__text {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.8rem;
    color: white;
  }

  .card__image {
    width: 100%;
    height: 190px;
    object-fit: contain;
    object-position: center;
    border-radius: 16px;
    display: block;
    border: 1px solid rgba(255,255,255,0.12);
    background: rgba(255,255,255,0.04);
    padding: 0.25rem;
    box-sizing: border-box;
  }

  .card__title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: #fbbf24;
    letter-spacing: 0.02em;
  }

  .card__description {
    margin: 0;
    font-size: 1rem;
    line-height: 1.7;
    color: #e5e7eb;
  }

  .card__section {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .card__section-title {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: greenyellow;
  }

  .card__list {
    margin: 0;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    color: #f9fafb;
  }

  .card__line {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem;
    color: #f9fafb;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .card__line strong {
    color: #fbbf24;
    font-weight: 600;
  }

  .card__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1rem;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(255,255,255,0.12);
  }

  .card__price-text {
    margin: 0;
    color: #34d399;
    font-size: 1rem;
    font-weight: 700;
    white-space: nowrap;
  }

  @media (max-width: 640px) {
    .container {
      max-width: 100%;
      width: 100%;
    }

    .card_box {
      min-height: auto;
      padding: 0.9rem;
    }

    .card__image {
      height: 150px;
    }

    .card__footer {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`

