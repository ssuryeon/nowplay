import Form from './Form';
import {Meta, StoryObj} from '@storybook/react-webpack5';

const meta:Meta = {
    title: 'Components/Form',
    component: Form,
}

export default meta;

export const Primary:StoryObj = {
    name: 'Form',
    args: {
        text: 'test',
        fontSize: 20,
    }
}