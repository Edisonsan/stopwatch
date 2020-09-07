import styled from 'styled-components';
import { FaPlay, FaPause } from 'react-icons/fa';

export const Title = styled.h1`
  font-size: 1.4em;
  color: #353f49;
  letter-spacing: 3px;
  text-transform: uppercase;
  /* ... */
`;

export const Container = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(138, 155, 180, 0.5);
  height: 50%;
  width: 105%;
  border-radius: 20px;
  /* margin-bottom: 5%; */
  padding-bottom: 5%;
`;

export const FooterLeft = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const Link = styled.button`
  background: transparent;
  border-color: transparent;
  font-size: 1em;
  text-decoration: underline;
  color: #353f49;
  font-weight: 700;
  text-transform: uppercase;
  margin: 10px 5%;
`;

export const ContainerPlay = styled.div`
  position: absolute;
  top: -5vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Play = styled.button`
  width: 7vw;
  height: 7vw;
  max-width: 60px;
  max-height: 60px;
  border-radius: 50%;
  border-color: transparent;
  background-color: #353f49;
`;

export const Version = styled.span`
  /* ... */
`;

export const IconPlay = styled(FaPlay)`
  font-size: 2em;
  color: white;
`;

export const IconPause = styled(FaPause)`
  font-size: 2em;
  color: white;
`;
