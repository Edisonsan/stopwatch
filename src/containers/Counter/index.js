import React from 'react';
import Card from '../../components/Card';
import {
  Title,
  Container,
  CardsContainer,
  Link,
  Play,
  FooterLeft,
  Version,
  ContainerPlay,
  IconPlay,
  IconPause,
} from './styles';

export const Counter = () => {
  const [play, setPlay] = React.useState(false);
  const [value, setValue] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const addSecond = async () => {
    console.log('addsecond, play: ', play);
    if (!play) return;

    let temp = {
      days: value.days,
      hours: value.hours,
      minutes: value.minutes,
      seconds: value.seconds,
    };

    let inc_minute = value.seconds === 59 ? true : false;
    let inc_hour = value.minutes === 59 ? true : false;
    let inc_day = value.hours === 23 ? true : false;

    temp.seconds = inc_minute ? 0 : value.seconds + 1;
    temp.minutes = inc_minute ? value.minutes + 1 : value.minutes;
    temp.hours = inc_hour ? value.hours + 1 : value.hours;
    temp.days = inc_day ? value.days + 1 : value.days;

    setValue(temp);
    await startWatch();
  };

  const startWatch = async () => {
    console.log('StartWatch, play: ', play);

    if (play) {
      setTimeout(() => addSecond(), 1000);
    }
  };

  React.useEffect(() => {
    console.log('useEffect, play', play);

    if (play) {
      console.log('Effect On');
      startWatch();
    } else {
      console.log('Effect Off');
    }
  }, [play]);

  const clearWatch = () => {
    // javascript statement here
    setValue({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };

  const handlePlay = async () => {
    console.log('HandlePlay: ', play);

    if (play) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  };

  return (
    <Container>
      <Title>Timer - Edison</Title>
      <CardsContainer>
        <Card label='Days' value={value?.days} />
        <Card label='Hours' value={value?.hours} />
        <Card label='Minutes' value={value?.minutes} />
        <Card label='Seconds' value={value?.seconds} />
      </CardsContainer>
      <FooterLeft>
        <ContainerPlay>
          <Play onClick={() => handlePlay()}>
            {!!play ? <IconPause /> : <IconPlay />}
          </Play>
        </ContainerPlay>
        <Link>Reset Timer</Link>
      </FooterLeft>
      <Version>Version 1.0 - Sep 1, 2020</Version>
    </Container>
  );
};

export default Counter;
