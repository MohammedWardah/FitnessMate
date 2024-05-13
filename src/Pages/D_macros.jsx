import PageTemplate from "../Components/Layout/PageTemplate";
import Macros from "../Components/Diet/Macros";

import macros from "../assets/UI/macros.png";

const D_macros = () => {
  return (
    <PageTemplate back={true} subTitle={"Macros"} subTitleImg={macros}>
      <Macros />
    </PageTemplate>
  );
};

export default D_macros;
