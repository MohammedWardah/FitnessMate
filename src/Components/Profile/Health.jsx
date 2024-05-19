import OuterComp from "../UI/OuterComp";
import HorizontalBar from "../UI/HorizontalBar";

const Health = () => {
  return (
    <>
      <OuterComp title={"This month"}>
        <HorizontalBar
          label={"Weight"}
          fillLevel={70}
          fillColor={"#217F4A"}
          ind1={`${0}Kg`}
          ind2={`${60}Kg`}
          ind3={`${120}Kg`}
        />
        <HorizontalBar
          label={"Body fat"}
          fillLevel={45}
          fillColor={"#704300"}
          ind1={`${0}%`}
          ind2={`${20}%`}
          ind3={`${40}%`}
        />
        <HorizontalBar
          label={"Avg BPM"}
          fillLevel={40}
          fillColor={"#B71D39"}
          ind1={`${40}`}
          ind2={`${80}`}
          ind3={`${120}`}
        />
        <HorizontalBar
          label={"Sleep"}
          fillLevel={85}
          fillColor={"#6905A7"}
          ind1={`Poor`}
          ind2={`Medium`}
          ind3={`Sufficient`}
        />
      </OuterComp>
      <OuterComp title={"Previous month"}>
        <HorizontalBar
          label={"Weight"}
          fillLevel={80}
          fillColor={"#217F4A"}
          ind1={`${0}Kg`}
          ind2={`${60}Kg`}
          ind3={`${120}Kg`}
        />
        <HorizontalBar
          label={"Body fat"}
          fillLevel={55}
          fillColor={"#704300"}
          ind1={`${0}%`}
          ind2={`${20}%`}
          ind3={`${40}%`}
        />
        <HorizontalBar
          label={"Avg BPM"}
          fillLevel={50}
          fillColor={"#B71D39"}
          ind1={`${40}`}
          ind2={`${80}`}
          ind3={`${120}`}
        />
        <HorizontalBar
          label={"Sleep"}
          fillLevel={65}
          fillColor={"#6905A7"}
          ind1={`Poor`}
          ind2={`Medium`}
          ind3={`Sufficient`}
        />
      </OuterComp>
    </>
  );
};

export default Health;
