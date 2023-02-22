import React from "react";
import styled, { keyframes } from "styled-components";

import AvatarImage from "../images/IMG_20180814_small.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const Avatar = styled.div`
  flex-shrink: 0;
  width: 12em;
  height: 12em;
  overflow: hidden;
  border-radius: 50%;
  border: 3px rgba(0, 0, 0, 0.7) solid;

  img {
    width: 100%;
    height: 100%;
  }

  @media (prefers-color-scheme: dark) {
    border: 5px rgba(250, 250, 250, 0.9) solid;
  }
  @media only screen and (prefers-color-scheme: dark) and (max-width: 480px) {
    border-color: rgba(255, 255, 255, 0.9);
  }
`

const InfoContainer = styled.div`
  color: #333;
  @media (prefers-color-scheme: dark) {
    color: #EEE;
  }
  @media only screen and (max-width: 480px) {
    margin: 0;
    text-align: center;
  }
`

const Name = styled.h1`
  font-size: 2.4em;
  letter-spacing: 0.2px;
`

const PersonalInfo = () => {
  return (
    <Container>
      <Avatar>
        <img
          src={AvatarImage}
          alt="Profile image of Anton"
        />
      </Avatar>
      <InfoContainer>
        <Name>Anton Hedström</Name>
        <a href="mailto:antonhedstrom@gmail.com">antonhedstrom@gmail.com</a>
      </InfoContainer>
    </Container>
  );
};

export default PersonalInfo;
