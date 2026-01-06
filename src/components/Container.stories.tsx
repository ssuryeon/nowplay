import {Container} from './Container';
import {Meta, StoryObj} from '@storybook/react-webpack5';

const meta:Meta = {
    title: 'Shared/Container',
    component: Container,
}

export default meta;

export const Primary:StoryObj = {
    name: 'Container',
}
