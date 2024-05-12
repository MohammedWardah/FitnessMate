import PageTemplate from "../Components/Layout/PageTemplate";
import Home from "../Components/Home/Home";

const HomePage = () => {
  return (
    <PageTemplate title={"Activity & Health Overview"}>
      <Home />
    </PageTemplate>
  );
};

export default HomePage;
