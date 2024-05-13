import HorizontalBar from "../UI/HorizontalBar";
import OuterComp from "../UI/OuterComp";

const WaterIntake = () => {
  return (
    <>
      <OuterComp title={"Water intake in Liter"}>
        <HorizontalBar
          label={"Stats"}
          fillLevel={40}
          fillColor={"#007FFF"}
          ind1={"0 L"}
          ind2={"1.5 L"}
          ind3={"3 L"}
        />
      </OuterComp>
      <OuterComp title={"Weekly goal"}>
        <HorizontalBar
          label={"Stats"}
          fillLevel={70}
          fillColor={"#007FFF"}
          ind1={"0 L"}
          ind2={"10 L"}
          ind3={"20 L"}
        />
      </OuterComp>
    </>
  );
};

export default WaterIntake;
