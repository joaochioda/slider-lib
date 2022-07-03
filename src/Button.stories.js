import React from "react";

import { Slider } from "./components";

export default {
  title: "Example/Slider",
  component: Slider,
};

const Template = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  nameAnimal: "bear",
  step: 30,
};

export const Color1 = Template.bind({});
Color1.args = {
  nameAnimal: "fox",
  step: 50,
};

export const Color2 = Template.bind({});
Color2.args = {
  nameAnimal: "tiger",
  step: 80,
};
