import OuterComp from "../UI/OuterComp";
import HorizontalBar from "../UI/HorizontalBar";

const History = () => {
  return (
    <>
      <OuterComp title={"Previous workouts"}>
        <HorizontalBar
          label={"Running"}
          fillLevel={20}
          fillColor={"#1288A2"}
          ind1={"0min"}
          ind2={"30min"}
          ind3={"60min"}
        />
        <HorizontalBar
          label={"Cycling"}
          fillLevel={100}
          fillColor={"#1288A2"}
          ind1={"0min"}
          ind2={"30min"}
          ind3={"60min"}
        />
        <HorizontalBar
          label={"Hiking"}
          fillLevel={60}
          fillColor={"#1288A2"}
          ind1={"0min"}
          ind2={"30min"}
          ind3={"60min"}
        />
        <HorizontalBar
          label={"Lifting"}
          fillLevel={75}
          fillColor={"#1288A2"}
          ind1={"0min"}
          ind2={"30min"}
          ind3={"60min"}
        />
      </OuterComp>
    </>
  );
};

export default History;
