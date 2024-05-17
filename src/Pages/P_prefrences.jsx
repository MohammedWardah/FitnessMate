import PageTemplate from "../Components/Layout/PageTemplate";
import Prefrences from "../Components/Profile/Prefrences";

import pref from "../assets/UI/prefrences.png";

const P_prefrences = () => {
  return (
    <PageTemplate back={true} subTitle={"prefrences"} subTitleImg={pref}>
      <Prefrences />
    </PageTemplate>
  );
};

export default P_prefrences;
