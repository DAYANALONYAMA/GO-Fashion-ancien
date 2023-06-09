import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import ImgAccueil from "../assets/accueil.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translatex(0vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {};
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src={ImgAccueil} style={{ width: "100%", height: "100%" }} />
          </ImgContainer>
          <InfoContainer>
            <Title>FEMME</Title>
            <Desc>DON'T COMPROMISE ON STYLE GET 30 OFF FOR NEW ARRIVALS</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="fbf0f4">
          <ImgContainer>
            <Image src={ImgAccueil} style={{ width: "100%", height: "100%" }} />
          </ImgContainer>
          <InfoContainer>
            <Title>HOMME</Title>
            <Desc>DON'T COMPROMISE ON STYLE GET 30 OFF FOR NEW ARRIVALS</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src={ImgAccueil} style={{ width: "100%", height: "100%" }} />
          </ImgContainer>
          <InfoContainer>
            <Title>ENFANT</Title>
            <Desc>DON'T COMPROMISE ON STYLE GET 30 OFF FOR NEW ARRIVALS</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
export default Slider;
