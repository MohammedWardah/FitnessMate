import PageTemplate from "../Components/Layout/PageTemplate";
import AddMealType from "../Components/Diet/AddMealType";

import launch from "../assets/UI/launch.png";

const D_addLaunch = () => {
  return (
    <PageTemplate back={true} subTitle={"Add launch"} subTitleImg={launch}>
      <AddMealType />
    </PageTemplate>
  );
};

export default D_addLaunch;
