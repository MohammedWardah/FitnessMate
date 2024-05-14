import PageTemplate from "../Components/Layout/PageTemplate";
import AddMealType from "../Components/Diet/AddMealType";

import dinner from "../assets/UI/dinner.png";

const D_addDinner = () => {
  return (
    <PageTemplate back={true} subTitle={"Add dinner"} subTitleImg={dinner}>
      <AddMealType />
    </PageTemplate>
  );
};

export default D_addDinner;
