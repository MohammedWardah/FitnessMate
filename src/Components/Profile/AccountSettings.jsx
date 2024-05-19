import OuterComp from "../UI/OuterComp";
import Radio from "../UI/Radio";
import Checkbox from "../UI/Checkbox";

import region from "../../assets/UI/region.png";
import connection from "../../assets/UI/connection.png";

const AccountSettings = () => {
  return (
    <>
      <OuterComp title={"Region"} icon={region}>
        <Radio label={"USA"} id={"usa"} name={"region"} checked={true} />
        <Radio label={"UK"} id={"uk"} name={"region"} />
        <Radio label={"Turkey"} id={"tr"} name={"region"} />
      </OuterComp>
      <OuterComp title={"Connection"} icon={connection}>
        <Checkbox label={"Connect to fit band"} id={"fitband"} checked={true} />
        <Checkbox label={"Connect wifi"} id={"wifi"} checked={true} />
      </OuterComp>
    </>
  );
};

export default AccountSettings;
