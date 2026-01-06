import Button from './Button';
import type {Meta, StoryObj} from '@storybook/react-webpack5';

const meta:Meta = {
    title: 'Shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'},
    }
}

export default meta;

export const Primary:StoryObj = {
    name: 'Button',
    args: {
        backgroundColor: "#000000",
        text: "test",
        style: {}
    },
}