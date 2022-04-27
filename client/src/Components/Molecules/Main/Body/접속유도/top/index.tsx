import AjouLogo from "@Atoms/AjouLogo";
import AirPlane from "@Atoms/AirPlane";
import AirPath from "@Atoms/AirPath";
import BlueText from "@Atoms/BlueText";
import StartButton from "@Atoms/StartButton";
import { HomeInfoContainer, AjouLogoStyle, AirPlaneStyle, AirPathStyle, InfoTitle, BlueBox, InfoContainer } from "./styles";

const HomeInfo = () => {
  return (
    <HomeInfoContainer>
      <AjouLogo style={AjouLogoStyle} />
      <AirPlane style={AirPlaneStyle} />
      <AirPath style={AirPathStyle} />
      <InfoContainer>
        <BlueBox />
        <InfoTitle>
          <BlueText>아주대학교</BlueText>
          <span>의 가상세계로</span>
          <p>여정을 떠날 준비가 되었나요?</p>
        </InfoTitle>
        <StartButton color="blue" />
      </InfoContainer>
    </HomeInfoContainer>
  );
};

export default HomeInfo;
