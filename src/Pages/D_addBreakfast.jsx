import PageTemplate from "../Components/Layout/PageTemplate";
import AddMealType from "../Components/Diet/AddMealType";

import breakfast from "../assets/UI/breakfast.png";

const D_addBreakfast = () => {
  return (
    <PageTemplate back={true} subTitle={"Add breakfast"} subTitleImg={breakfast}>
      <AddMealType />
    </PageTemplate>
  );
};

export default D_addBreakfast;
