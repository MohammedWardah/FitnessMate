export const overView = {
  setCals: 500,
  setSteps: 6000,
  setTime: 30,
  setSleep: 8,
  cals: 412,
  steps: 3223,
  time: 10,
  sleep: 7,
  calsFill: null,
  stepsFill: null,
  timeFill: null,
  sleepFill: null,
};

overView.calsFill = (overView.cals / overView.setCals) * 100;
overView.stepsFill = (overView.steps / overView.setSteps) * 100;
overView.timeFill = (overView.time / overView.setTime) * 100;
overView.sleepFill = (overView.sleep / overView.setSleep) * 100;
