import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import SaphireImg from "../../assets/images/round-sapphire.png";

const MetaDataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 14px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 4px;
`;
const SmallText1 = styled.span`
  font-size: 11px;
  color: yellow;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 4px;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Crystal = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 30px;
  }
`;

export function ChibiMetaData(props) {
  return (
    <MetaDataContainer>
      <SmallText>1 of 1</SmallText>
      <SpacedHorizontalContainer>
        <MediumText>THREE KINGDOMS #88</MediumText>
        <MediumText>貂蟬</MediumText>
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin="1.2em" />
      <SpacedHorizontalContainer>
        <SmallText>Gender: female</SmallText>
        <SmallText>eyes: grey</SmallText>
      </SpacedHorizontalContainer>
      <SpacedHorizontalContainer>
        <SmallText1>Attire: purple witch</SmallText1>
        <SmallText>Hair: aqua</SmallText>
      </SpacedHorizontalContainer>
      <SpacedHorizontalContainer>
        <SmallText>offhand: cheap dagger</SmallText>
        <SmallText>nose: tiny</SmallText>
      </SpacedHorizontalContainer>
      <SpacedHorizontalContainer>
        <SmallText>Mainhand: Sword</SmallText>
        <SmallText1>Mouth: happy</SmallText1>
      </SpacedHorizontalContainer>
      <Crystal>
        <img src={SaphireImg} alt="crystal" />
      </Crystal>
    </MetaDataContainer>
  );
}
