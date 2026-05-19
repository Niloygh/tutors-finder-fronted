import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <p className="btn-shine">Tutor Finder</p>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;

  .btn-shine {
    margin: 0;
    padding: 12px 35px;

    color: #fff;
    background: linear-gradient(
      to right,
      #9f9f9f 0,
      #fff 10%,
      #868686 20%
    );

    background-position: 0;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 3s infinite linear;
    animation-fill-mode: forwards;

    font-weight: 600;
    font-size: 20px;
    white-space: nowrap;
    font-family: "Poppins", sans-serif;
  }

  @keyframes shine {
    0% {
      background-position: 0;
    }

    60% {
      background-position: 180px;
    }

    100% {
      background-position: 180px;
    }
  }
`;

export default Button;