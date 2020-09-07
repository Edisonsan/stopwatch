import styled from 'styled-components';
import bgimage from '../assets/bg-image.jpg';
import { RiMapPinTimeLine } from 'react-icons/ri';

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgimage});
  background-size: cover;
`;

export const Body = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
`;

export const Header = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  /* margin: 0 20px 0 0; */
  color: #526372;
  font-weight: 600;
  margin: 0 10px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
    color: #424f5b;
  }
`;

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Links = styled.div`
  /* background-color: red; */
  padding: 0px 10px;
  margin-right: 20px;
`;

export const Footer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//Temp
export const LateralBar = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SocialBar = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(RiMapPinTimeLine)`
  font-size: 3em;
  color: #424f5b;
  margin-left: 20px;
`;
