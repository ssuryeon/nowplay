import Menu from './Menu';
import {Meta, StoryObj} from '@storybook/react-webpack5';

const meta:Meta = {
    title: 'Main/Menu',
    component: Menu,
}

export default meta;

export const Primary:StoryObj = {
    name: 'Menu',
    args: {
        nowMatch: true,
        rankMatch: false,
        storedMatch: false,
        profileMatch: false,
    }
}