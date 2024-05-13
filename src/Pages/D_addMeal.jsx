import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AddMeal from "../Components/Diet/AddMeal";
import PageTemplate from "../Components/Layout/PageTemplate";
import planner from "../assets/UI/planner.png";

const validDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const D_addMeal = () => {
  const navigate = useNavigate();
  const { dayName } = useParams();

  useEffect(() => {
    // Check if the provided dayName is valid (This is done so the user cant manipulate the day in the url)
    if (!validDays.includes(dayName)) {
      navigate("/Diet/meal-planner");
    }
  }, [dayName, navigate]);

  return (
    <PageTemplate back={true} subTitle={`${dayName} Meal Planner`} subTitleImg={planner}>
      <AddMeal />
    </PageTemplate>
  );
};

export default D_addMeal;
