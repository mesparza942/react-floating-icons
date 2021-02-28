import { Story, Meta } from "@storybook/react";
import { FloatingIcons, IFloatingIconsProps } from "./FloatingIcons";
import {
  WithBackgroundTemplate,
  WithoutBackgroundTemplate,
  SolidBackgroundTemplate,
  CustomItemTemplate,
} from "./general-usage";
import { LuiguiMansionTemplate } from "./demo";

export default {
  title: "Floating Icons",
  component: FloatingIcons,
} as Meta;

const Template: Story<IFloatingIconsProps> = (args) => (
  <FloatingIcons {...args} />
);

export const WithBackground = Template.bind({});

WithBackground.args = WithBackgroundTemplate;

export const WithoutBackground = Template.bind({});

WithoutBackground.args = WithoutBackgroundTemplate;

export const SolidBackground = Template.bind({});

SolidBackground.args = SolidBackgroundTemplate;

export const CustomItems = Template.bind({});

CustomItems.args = CustomItemTemplate;

/**
 * Demo: Luigui's Mansion Boo
 */
export const DemoLuiguiMansion = Template.bind({});

DemoLuiguiMansion.args = LuiguiMansionTemplate;
