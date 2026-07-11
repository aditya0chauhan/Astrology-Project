import styled from 'styled-components';
import { useTranslation } from "react-i18next";

const Language = () => {
      const {t , i18n} = useTranslation()
    const changeLanguage = ()=>{
        if(i18n.language === 'en') {
          i18n.changeLanguage('hi')
        }else if(i18n.language === 'hi'){
          i18n.changeLanguage("en")
        }
      }
  return (
    <StyledWrapper>
      <div id="firstFilter" className="filter-switch">
        <input defaultChecked id="option1" name="options" type="radio" />
        <label onClick={changeLanguage} className="option" htmlFor="option1">English</label>
        <input id="option2" name="options" type="radio" />
        <label onClick={changeLanguage} className="option" htmlFor="option2">हिंदी</label>
        <span className="background" />
      </div>
    </StyledWrapper>
  );
}

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
  }
  .filter-switch input {
    display: none;
  }
  .filter-switch label {
    flex: 1;
    text-align: center;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.5s;
    font-weight: 600;
    font-size: 8px;
  }
  .filter-switch .background {
    position: absolute;
    display:flex;
    align-items:center;
    width: 42%;
    height: 13px;
    background-color: #ffc000;
    top: 4px;
    left: 4px;
    border-radius: 30px;
    transition: left 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  #option2:checked ~ .background {
    left: 50%;
  }
  #option1:checked + label[for="option1"] {
    color: #212121;
    font-weight: bold;
  }
  #option2:checked + label[for="option2"] {
    color: #212121;
    font-weight: bold;
  }
  #option1:not(:checked) + label[for="option1"],
  #option2:not(:checked) + label[for="option2"] {
    color: #7d7d7d;
  }`;

export default Language;
