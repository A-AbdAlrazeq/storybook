import Button from "../components/Button";
export default {
  title: "Components/Button",
  component: Button,
  argsTypes: { onClick: { action: "handleClick" } },
};
const Template = (args) => <Button {...args} />; //we create func that's returns our button and passes all the args to it
export const Red = Template.bind({}); //this will copy the template object
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
};

export const Green = Template.bind({}); //this will copy the template object
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
};

export const Small = Template.bind({}); //this will copy the template object
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
};

export const Large = Template.bind({}); //this will copy the template object
Large.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "lg",
};
export const LongLabel = Template.bind({}); //this will copy the template object
LongLabel.args = {
  backgroundColor: "green",
  label: "Press Me Pleaseeeeeeeeeeeee",
  size: "md",
};
