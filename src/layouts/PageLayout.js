import React from 'react';
import {
  Layout,
  Body,
  Logo,
  Link,
  Header,
  Links,
  Container,
  Footer,
  Card,
  SocialBar,
  LateralBar,
} from './styles.js';
// import SocialBar from '../components/SocialBar';
// import StylesBar from '../components/StylesBar';
import ButtonIcon from '../components/ButtonIcon/index.js';
import {
  FaLinkedin,
  FaEnvelopeOpenText,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';
import { RiContrast2Line } from 'react-icons/ri';

export const PageLayout = ({ children }) => {
  return (
    <Layout id='layout'>
      <Body id='layout__body'>
        <Header id='layout__body-header'>
          <Logo id='layout__body-header-logo' />
          <Links>
            <Link id='layout__body-header-link' href='https://github.com'>
              Github
            </Link>
            <Link id='layout__body-header-link' href='https://linkedin.com'>
              LinkedIn
            </Link>
          </Links>
        </Header>
        <Card id='layout__body-card'>
          <SocialBar id='layout__body-card-social'>
            <ButtonIcon>
              <FaLinkedin />
            </ButtonIcon>
            <ButtonIcon>
              <FaEnvelopeOpenText />
            </ButtonIcon>
            <ButtonIcon>
              <FaGithub />
            </ButtonIcon>
            <ButtonIcon>
              <FaTwitter />
            </ButtonIcon>
          </SocialBar>
          <Container>{children}</Container>
          <LateralBar id='layout__body-card-styles'>
            <ButtonIcon>
              <RiContrast2Line />
            </ButtonIcon>
          </LateralBar>
        </Card>
        <Footer>
          <Link href='mailto://sanchez.edison@gmail.com'>
            sanchez.edison@gmail.com
          </Link>
        </Footer>
      </Body>
    </Layout>
  );
};

export default PageLayout;
