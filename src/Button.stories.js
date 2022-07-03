import React from "react";

import { Slider } from "./components";

export default {
  title: "Example/Slider",
  component: Slider,
};

const Template = (args) => <Slider {...args} />;

export const Default = Template.bind({});
// Default.args = {
//   label: 'My Button',
// };

export const Color1 = Template.bind({});
Color1.args = {
  nameAnimal: "bear",
};
