import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Language = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(() => (i18n.language?.toLowerCase().startsWith('hi') ? 'hi' : 'en'));

  useEffect(() => {
    setCurrentLang(i18n.language?.toLowerCase().startsWith('hi') ? 'hi' : 'en');
  }, [i18n.language]);

  const changeLanguage = (lang) => {
    if (lang === currentLang) return;
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <StyledWrapper>
      <div className="filter-switch" role="tablist" aria-label="Language switch">
        <button
          type="button"
          className={`option ${currentLang === 'en' ? 'active' : ''}`}
          onClick={() => changeLanguage('en')}
        >
          English
        </button>
        <button
          type="button"
          className={`option ${currentLang === 'hi' ? 'active' : ''}`}
          onClick={() => changeLanguage('hi')}
        >
          हिंदी
        </button>
        <span className={`background ${currentLang === 'hi' ? 'right' : 'left'}`} />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .filter-switch {
    border: 1px solid #ffc000;
    border-radius: 30px;
    position: relative;
    display: flex;
    align-items: center;
    height: 22px;
    width: 80px;
    overflow: hidden;
    padding: 2px;
  }

  .filter-switch .option {
    flex: 1;
    text-align: center;
    cursor: pointer;
    border: none;
    background: transparent;
    border-radius: 30px;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
    font-weight: 600;
    font-size: 8px;
    color: #7d7d7d;
    padding: 0;
  }

  .filter-switch .option.active {
    color: #212121;
    font-weight: bold;
  }

  .filter-switch .background {
    position: absolute;
    display: flex;
    align-items: center;
    width: calc(50% - 4px);
    height: calc(100% - 4px);
    background-color: #ffc000;
    top: 2px;
    left: 2px;
    border-radius: 30px;
    transition: left 0.3s ease;
  }

  .filter-switch .background.right {
    left: calc(50% + 2px);
  }
`;

export default Language;
