import OuterComp from "../UI/OuterComp";
import Radio from "../UI/Radio";

import units from "../../assets/UI/units.png";
import theme from "../../assets/UI/theme.png";
import language from "../../assets/UI/language.png";

const Prefrences = () => {
  return (
    <>
      <OuterComp title={"Units"} icon={units}>
        <Radio label={"Metric"} id={"metric"} name={"unit"} checked={true} />
        <Radio label={"Imperial"} id={"imperial"} name={"unit"} />
      </OuterComp>
      <OuterComp title={"Theme"} icon={theme}>
        <Radio label={"Light"} id={"light"} name={"theme"} />
        <Radio label={"Dark"} id={"dark"} name={"theme"} checked={true} />
      </OuterComp>
      <OuterComp title={"Language"} icon={language}>
        <Radio label={"English"} id={"english"} name={"language"} checked={true} />
        <Radio label={"Arabic"} id={"arabic"} name={"language"} />
        <Radio label={"Turkish"} id={"turkish"} name={"language"} />
      </OuterComp>
    </>
  );
};

export default Prefrences;
