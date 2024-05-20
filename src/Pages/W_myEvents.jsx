import PageTemplate from "../Components/Layout/PageTemplate";
import MyEvents from "../Components/Watch/MyEvents";

import events from "../assets/UI/events.png";

const W_myEvents = () => {
  return (
    <PageTemplate back={true} subTitle={"My events reminder"} subTitleImg={events}>
      <MyEvents />
    </PageTemplate>
  );
};

export default W_myEvents;
