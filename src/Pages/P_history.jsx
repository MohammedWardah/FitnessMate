import PageTemplate from "../Components/Layout/PageTemplate";
import History from "../Components/Profile/History";

import history from "../assets/UI/history.png";

const P_history = () => {
  return (
    <PageTemplate back={true} subTitle={"History"} subTitleImg={history}>
      <History />
    </PageTemplate>
  );
};

export default P_history;
