import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import RashiLists from './RashiLists';
import { useState } from 'react';

const Menu = () => {
  const [hover , setHover] = useState(false)
  const { t } = useTranslation()

  return (
    <StyledWrapper>
      <label className="event-wrapper">
        <input type="checkbox" defaultChecked className="event-wrapper-inp" />
        <div className="bar">
          <span className="top bar-list" />
          <span className="middle bar-list" />
          <span className="bottom bar-list" />
        </div>
        <section className="menu-container">
          <div className="menu-list"><Link to="/">{t("home")} </Link></div>
          <div className="menu-list"> <Link to="/astrology">{t("astrology")} </Link> </div>
          <div className="menu-list"><Link to="/vastu">{t("vaastu")}</Link> </div>
          <div className="menu-list"><Link to="/numerology">{t("numerology")}</Link> </div>
          <div className="menu-list"><Link to={'/poojan'}>{t("pujan")}</Link></div>
          <div className="menu-list"><Link to={'/panchang'}>{t("panchang")}</Link></div>
          <div className="relative lg:flex my-3"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>

            <span className="hover:text-amber-600">
          <Link to={'rashifal'}>{t("rashifal")}</Link>    
            </span>
        
          </div>
          <div className="menu-list"> <Link to={'/contact'}>{t("contact")}</Link> </div>
          <div className="menu-list"><Link to={'/account'}>{t("account")}</Link></div>
        </section>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .event-wrapper > .event-wrapper-inp {
    display: none;
  }
  .event-wrapper {
    font-weight: 500;
    color: orange;
    padding: 3px 15px;
    border-radius: 10px;

    display: flex;
    align-items: center;
    height: 2.5rem;
    width: fit-content;
    position: relative;
    cursor: pointer;
    justify-content: space-between;
  }

  .arrow {
    height: 34%;
    aspect-ratio: 1;
    margin-block: auto;
    position: relative;
    display: flex;
    justify-content: center;
    transition: all 0.3s;
  }

  .arrow::after,
  .arrow::before {
    content: "";
    position: absolute;
    background-color: orange;
    color:orange;
    height: 100%;
    width: 2.5px;
    border-radius: 500px;
    transform-origin: bottom;
  }

  .arrow::after {
    transform: rotate(35deg) translateX(-0.5px);
  }
  .arrow::before {
    transform: rotate(-35deg) translateX(0.5px);
  }

  .event-wrapper > .event-wrapper-inp:checked + .arrow {
    transform: rotateX(180deg);
  }

  .menu-container {
    border : 2px solid orange;
    background-color:#08002D;
    color: orange;
    border-radius: 10px;
    position: absolute;
    width: 180px;
    right:5px;
    top: 155%;
    overflow: hidden;
    clip-path: inset(0% 0% 0% 0% round 10px);
    transition: all 0.4s;
  }

  .menu-list {
    --delay: 0.4s;
    --trdelay: 0.15s;
    padding: 8px 10px;
    border-radius: inherit;
    transition: background-color 0.2s 0s;
    position: relative;
    transform: translateY(50px);
    opacity: 0;
  }

  .menu-list::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-90%);
    height: 1px;
    background-color: rgba(0, 0, 0, 0.3);
    width: 95%;
  }

  .menu-list:hover {
    background-color: rgb(223, 223, 223);
  }

  .event-wrapper-inp:checked ~ .menu-container {
    clip-path: inset(10% 50% 90% 50% round 10px);
  }

  .event-wrapper-inp:not(:checked) ~ .menu-container .menu-list {
    transform: translateY(0);
    opacity: 1;
  }

  .event-wrapper-inp:not(:checked) ~ .menu-container .menu-list:nth-child(1) {
    transition:
      transform 0.4s var(--delay),
      opacity 0.4s var(--delay);
  }

  .event-wrapper-inp:not(:checked) ~ .menu-container .menu-list:nth-child(2) {
    transition:
      transform 0.4s calc(var(--delay) + (var(--trdelay) * 1)),
      opacity 0.4s calc(var(--delay) + (var(--trdelay) * 1));
  }

  .event-wrapper-inp:not(:checked) ~ .menu-container .menu-list:nth-child(3) {
    transition:
      transform 0.4s calc(var(--delay) + (var(--trdelay) * 2)),
      opacity 0.4s calc(var(--delay) + (var(--trdelay) * 2));
  }

  .event-wrapper-inp:not(:checked) ~ .menu-container .menu-list:nth-child(4) {
    transition:
      transform 0.4s calc(var(--delay) + (var(--trdelay) * 3)),
      opacity 0.4s calc(var(--delay) + (var(--trdelay) * 3));
  }

  .bar-event-wrapper-inp {
    -webkit-appearance: none;
    display: none;
    visibility: hidden;
  }

  .bar {
    color:orange;
    display: flex;
    height: 50%;
    width: 20px;
    flex-direction: column;
    gap: 3px;
  }

  .bar-list {
    --transform: -25%;
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 50px;
    background-color: white;
    transition: all 0.4s;
    position: relative;
  }

  .event-wrapper-inp:not(:checked) ~ .bar > .top {
    transform-origin: top right;
    transform: translateY(var(--transform)) rotate(-55deg);
  }

  .event-wrapper-inp:not(:checked) ~ .bar > .middle {
    transform: translateX(-50%);
    opacity: 0;
  }

  .event-wrapper-inp:not(:checked) ~ .bar > .bottom {
    transform-origin: bottom right;
    transform: translateY(calc(var(--transform) * -1)) rotate(45deg);
  }`;

export default Menu;
