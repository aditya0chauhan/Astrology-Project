import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleLinkClick = () => setOpen(false);

  return (
    <StyledWrapper>
      <button
        type="button"
        className={`event-wrapper ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={t('menu') || 'Menu'}
      >
        <div className="bar" aria-hidden="true">
          <span className="top bar-list" />
          <span className="middle bar-list" />
          <span className="bottom bar-list" />
        </div>
      </button>

      <div className={`menu-container ${open ? 'open' : ''}`}>
        <div className="menu-list">
          <Link to="/" onClick={handleLinkClick}>{t('home')}</Link>
        </div>
        <div className="menu-list">
          <Link to="/astrology" onClick={handleLinkClick}>{t('astrology')}</Link>
        </div>
        <div className="menu-list">
          <Link to="/vastu" onClick={handleLinkClick}>{t('vaastu')}</Link>
        </div>
        <div className="menu-list">
          <Link to="/numerology" onClick={handleLinkClick}>{t('numerology')}</Link>
        </div>
        <div className="menu-list">
          <Link to="/poojan" onClick={handleLinkClick}>{t('pujan')}</Link>
        </div>
        <div className="menu-list">
          <Link to="/panchang" onClick={handleLinkClick}>{t('panchang')}</Link>
        </div>
        {/* <div className="menu-list">
          <Link to="/report" onClick={handleLinkClick}>{t('rep')}</Link>
        </div> */}
        <div className="menu-list">
          <Link to="/rashifal" onClick={handleLinkClick}>{t('rashifal')}</Link>
        </div>
        <div className="menu-list">
          <Link to="/contact" onClick={handleLinkClick}>{t('contact')}</Link>
        </div>
        <div className="menu-list">
          <Link to="/account" onClick={handleLinkClick}>{t('account')}</Link>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;

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
    background: transparent;
    border: none;
  }

  .bar {
    color: orange;
    display: flex;
    height: 50%;
    width: 20px;
    flex-direction: column;
    gap: 3px;
  }

  .bar-list {
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 50px;
    background-color: white;
    transition: all 0.3s ease;
    position: relative;
  }

  .event-wrapper.is-open .top {
    transform-origin: top right;
    transform: translateY(-3px) rotate(-45deg);
  }

  .event-wrapper.is-open .middle {
    transform: translateX(-50%);
    opacity: 0;
  }

  .event-wrapper.is-open .bottom {
    transform-origin: bottom right;
    transform: translateY(3px) rotate(45deg);
  }

  .menu-container {
    border: 2px solid orange;
    background-color: #08002D;
    color: orange;
    border-radius: 10px;
    position: absolute;
    width: 180px;
    right: 0;
    top: calc(100% + 8px);
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-6px);
    transition: all 0.25s ease;
    z-index: 60;
  }

  .menu-container.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .menu-list {
    padding: 8px 10px;
    border-radius: inherit;
    transition: background-color 0.2s ease;
    position: relative;
  }

  .menu-list a {
    color: inherit;
    display: block;
    text-decoration: none;
    font-weight: 600;
  }

  .menu-list::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    background-color: rgba(255, 255, 255, 0.18);
    width: 90%;
  }

  .menu-list:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
`;

export default Menu;
