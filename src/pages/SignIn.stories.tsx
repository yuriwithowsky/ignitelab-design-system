import { Meta, StoryObj } from "@storybook/react";
import { SignIn } from "./SignIn";

export default {
  title: "Pages/Sign In",
  component: SignIn,
  args: {
    children: "Create account",
  },
  argTypes: {},
} as Meta;

export const Default: StoryObj = {};
