import Stack from "../components/Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
};
/* https://storybook.js.org/docs/react/api/argtypes#gatsby-focus-wrapper
1. defaultValue is just a standard field built into Storybook and is used as a key for a value:
2. Starting from the outside, he's spreading values into an array, that's the brackets and the 3 periods aka [...]
3. The values he's spreading into the array above come from the Array(numberOfChildren).keys(). I'll explain in two parts. 
Part 1: we've got an empty array created with a maximum limit of 4 values, that's Array(numberOfChildren)
Part 2: that array is then counted out using the keys() function. As stated in MDN, this function returns "An array of strings that represent all the enumerable properties of the given object.
" Since the array returned from Part 1 was empty, this just counts out the number of indexes (0, 1, 2, 3).
4. As a result, this expression [...Array(numberOfChildren).keys()] returns an array that is [0, 1, 2, 3]
5. When he iterates over it that, the values being passed as "n" are 0, 1, 2, and 3. That explains why he adds a 1 to each value within the brackets {n + 1} */

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
  /*we use array to give us the index of different array element& we map it to array use (...) ex:if child num=3 
  the array will be 0 1 2*/
); // we pass num of children because we don't need to pass it to stack we use it to put the child inside the stack

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
  spacing: 3,
  wrap: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "column",
  spacing: 2,
  wrap: false,
};
export const NoSpacing = Template.bind({});
NoSpacing.args = {
  direction: "column",
  spacing: 0,
  wrap: false,
};

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
  numberOfChildren: 40,
  direction: "row",
  spacing: 2,
  wrap: true,
};
export const Empty = Template.bind({});
Empty.args = {
  numberOfChildren: 0,
  direction: "row",
  spacing: 2,
  wrap: false,
};
