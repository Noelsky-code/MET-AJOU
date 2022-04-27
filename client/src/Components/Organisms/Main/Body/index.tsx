/* eslint-disable @typescript-eslint/no-unused-vars */
import BaseImages from "@Molecules/Main/BaseImages";
import HomeTutorial from "@Molecules/Main/Body/tutorial";
import HomeTechIntroduce from "@Molecules/Main/Body/기능소개";
import FirstIndex from "@Molecules/Main/Body/기능소개/FirstIndex";
import SecondIndex from "@Molecules/Main/Body/기능소개/SecondIndex";
import HomeBottomInfo from "@Molecules/Main/Body/접속유도/bottom";
import HomeInfo from "@Molecules/Main/Body/접속유도/top";
import { TechIntroduceContainer } from "./styles";

const MainBody = () => {
  return (
    <>
      <BaseImages />
      <HomeInfo />
      <FirstIndex />
      <SecondIndex />
      {/* <TechIntroduceContainer>
        <HomeTechIntroduce />
        <HomeTutorial />
        <HomeBottomInfo />
      </TechIntroduceContainer> */}
    </>
  );
};

export default MainBody;
