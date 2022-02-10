import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";

import ChibiGirlImg from "../../assets/images/chibigirl.png";
import { ChibiMetaData } from "./ChibiMetaData.jsx";

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #241043;
  color: #fff;
  position: relative;
  cursor: grab;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: #f33881;
  border-radius: 50%;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

const ChibiNameText = styled.h1`
  color: #fff;
  margin: 0;
  z-index: 10;
  font-size: 100px;
  font-weight: 900;
`;

const ChibiWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Chibi = styled(motion.div)`
  width: auto;
  height: 450px;
  z-index: 99;
  user-select: none;
  margin-right: -1em;
  margin-top: 2em;
  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;

export function BaseCard(props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          <ChibiWrapper>
            <Chibi
              style={{ x, y, rotateX, rotateY, rotate: "-10deg", z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            >
              <img src={ChibiGirlImg} alt="Chibi" />
            </Chibi>
          </ChibiWrapper>
          <ChibiNameText>貂蟬</ChibiNameText>
        </TopContainer>
        <BottomContainer>
          <ChibiMetaData />
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  );
}
