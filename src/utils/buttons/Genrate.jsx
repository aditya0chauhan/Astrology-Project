import styled from 'styled-components';

export const Genrate = () => {
  return (
    <StyledWrapper>
      <button className="btn">
        <svg height={24} width={24} fill="#FFFF55" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
          <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
        </svg>
        <span className="text">Get Kundali</span>
      </button>
    </StyledWrapper>
  );
}


export const GenrateMilan = () => {
  return (
    <StyledWrapper>
      <button className="btn">
        <svg height={24} width={24} fill="#FFFF55" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
          <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
        </svg>
        <span className="text">Kundali Milan</span>
      </button>
    </StyledWrapper>
  );
}

export const GenrateKp = () => {
  return (
    <StyledWrapper>
      <button className="btn">
        <svg height={24} width={24} fill="#FFFF55" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
          <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
        </svg>
        <span className="text">Get Kp Kundali</span>
      </button>
    </StyledWrapper>
  );
}

export const GenrateLk = () => {
  return (
    <StyledWrapper>
      <button className="btn">
        <svg height={24} width={24} fill="#FFFF55" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
          <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
        </svg>
        <span className="text">Get Lal Kitab</span>
      </button>
    </StyledWrapper>
  );
}

export const GenrateReport = () => {
  return (
    <StyledWrapper>
      <button className="btn">
        <svg height={24} width={24} fill="#FFFF55" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
          <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
        </svg>
        <span className="text">Genrate Report</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    border: none;
    width: 12em;
    height: 3em;
    border-radius: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background: #1C1A1C;
    cursor: pointer;
    border: 1px solid yellow;
    color:yellow;
    transition: all 450ms ease-in-out;
  }

  .sparkle {
    fill:#FFFF55;
    transition: all 800ms ease;
  }

  .text {
    font-weight: 600;
    color:#FFFF55;
    font-size: medium;
  }

  .btn:hover {
    background: linear-gradient(0deg,#abecd6,#fbed96);
    box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
    inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px 4px rgba(255, 255, 255, 0.2),
    0px 0px 180px 0px #9917FF;
    transform: translateY(-2px);
  }

  .btn:hover .text {
    color: black;
  }

  .btn:hover .sparkle {
    fill: black;
    transform: scale(1.2);
  }`;

