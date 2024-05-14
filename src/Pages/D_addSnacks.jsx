import PageTemplate from "../Components/Layout/PageTemplate";
import AddMealType from "../Components/Diet/AddMealType";

import snacks from "../assets/UI/snacks.png";

const D_addSnacks = () => {
  return (
    <PageTemplate back={true} subTitle={"Add snacks"} subTitleImg={snacks}>
      <AddMealType />
    </PageTemplate>
  );
};

export default D_addSnacks;
