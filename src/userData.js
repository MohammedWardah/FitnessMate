export const overView = {
  setCals: 500,
  setSteps: 6000,
  setTime: 30,
  setSleep: 8,
  cals: 412,
  steps: 3223,
  time: 10,
  sleep: 7,
  setWeeklyCals: 3500,
  setWeeklySteps: 30000,
  setWeeklyTime: 210,
  calsWeekly: 3220,
  stepsWeekly: 25000,
  timeWeekly: 200,
  calsFill: null,
  stepsFill: null,
  timeFill: null,
  sleepFill: null,
  calsWeeklyFill: null,
  stepsWeeklyFill: null,
  timeWeeklyFill: null,
};

overView.calsFill = (overView.cals / overView.setCals) * 100;
overView.stepsFill = (overView.steps / overView.setSteps) * 100;
overView.timeFill = (overView.time / overView.setTime) * 100;
overView.sleepFill = (overView.sleep / overView.setSleep) * 100;
overView.calsWeeklyFill = (overView.calsWeekly / overView.setWeeklyCals) * 100;
overView.stepsWeeklyFill = (overView.stepsWeekly / overView.setWeeklySteps) * 100;
overView.timeWeeklyFill = (overView.timeWeekly / overView.setWeeklyTime) * 100;
