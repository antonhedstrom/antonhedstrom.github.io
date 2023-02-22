import React from 'react';
import styled, { css } from 'styled-components';

import GithubLogo from '../images/socials/github.svg';
import LinkedinLogo from '../images/socials/linkedin.svg';
import FacebookLogo from '../images/socials/facebook.svg';
import TwitterLogo from '../images/socials/twitter.svg';
import InstagramLogo from '../images/socials/instagram.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-block-start: 20px;

  @media only screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`

const SocialItem = styled.div`
  @media only screen and (max-width: 480px) {
    text-align: center;
  }

`

const SocialLink = styled.a`
  display: inline-block;
  border-radius: 10px;
  transition: all 200ms ease-in-out;

  @media (prefers-color-scheme: dark) {
    svg {
      filter: grayscale(1) brightness(3);
    }

    ${({ invert }) => invert && css`
      svg {
        filter: grayscale(1) brightness(1) invert(1);
      }
    `}

    &:hover {
      background-color: rgba(0, 0, 0, 0.4);

      svg {
        filter: unset;
      }

      ${({ invert }) => invert && css`
        svg {
          filter: grayscale(1) brightness(1) invert(1);
        }
      `}
    }
  }

  svg {
    transition: all 200ms ease-in-out;
    opacity: 0.7;
  }

  &:hover {
    svg {
      transform: scale(1.2);
      opacity: 1;
    }
  }

`

export const SocialLinks = () => {

  return <Container>
    <SocialItem>
      <SocialLink invert href="https://github.com/antonhedstrom">
        <GithubLogo />
      </SocialLink>
    </SocialItem>
    <SocialItem>
      <SocialLink href="https://se.linkedin.com/in/antonhedstrom">
        <LinkedinLogo />
      </SocialLink>
    </SocialItem>
    <SocialItem>
      <SocialLink href="https://www.facebook.com/antonhedstroem">
        <FacebookLogo />
      </SocialLink>
    </SocialItem>
    <SocialItem>
      <SocialLink href="https://twitter.com/antonhedstrom">
        <TwitterLogo />
      </SocialLink>
    </SocialItem>
    <SocialItem>
      <SocialLink href="https://www.instagram.com/anton_hedstrom/">
        <InstagramLogo />
      </SocialLink>
    </SocialItem>
  </Container>
}

export default SocialLinks;
