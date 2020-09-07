/* eslint-disable react-hooks/exhaustive-deps */
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
  const [timer, setTimer] = React.useState(null);
  const [value, setValue] = React.useState();

  //Handle Change button Play
  React.useEffect(() => {
    if (play) {
      startWatch();
    } else {
      clearTimeout(timer);
    }

    return () => null;
  }, [play]);

  //Handle Change Value
  React.useEffect(() => {
    const onEffect = () => {
      console.log(value);
      if (value === undefined) {
        return;
      }
      startWatch();
    };
    onEffect();

    return () => null;
  }, [value]);

  //
  const addSecond = async () => {
    let temp = {
      days: value?.days ?? 0,
      hours: value?.hours ?? 0,
      minutes: value?.minutes ?? 0,
      seconds: value?.seconds ?? 0,
    };

    let inc_minute = temp.seconds === 59;
    let inc_hour = temp.minutes === 59;
    let inc_day = temp.hours === 23;

    temp.seconds = inc_minute ? 0 : temp.seconds + 1;
    temp.minutes = inc_minute ? temp.minutes + 1 : temp.minutes;
    temp.hours = inc_hour ? temp.hours + 1 : temp.hours;
    temp.days = inc_day ? temp.days + 1 : temp.days;

    setValue(temp);
    clearTimeout(timer);
  };

  const startWatch = () => {
    const _timer = setTimeout(() => addSecond(), 1000);
    setTimer(_timer);
  };

  const clearWatch = () => {
    if (play) setPlay(false);

    setValue();
  };

  const handlePlay = () => {
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
        <Card label='Days' value={value?.days ?? 0} />
        <Card label='Hours' value={value?.hours ?? 0} />
        <Card label='Minutes' value={value?.minutes ?? 0} />
        <Card label='Seconds' value={value?.seconds ?? 0} />
      </CardsContainer>
      <FooterLeft>
        <ContainerPlay>
          <Play onClick={() => handlePlay()}>
            {!!play ? <IconPause /> : <IconPlay />}
          </Play>
        </ContainerPlay>
        <Link onClick={() => clearWatch()}>Reset Timer</Link>
      </FooterLeft>
      <Version>Version 1.3 - Sep 1, 2020</Version>
    </Container>
  );
};

export default Counter;
