import {Meta, StoryObj} from '@storybook/react-webpack5';
import RoomHeader from './RoomHeader';

const meta:Meta = {
    title: 'Room/RoomHeader',
    component: RoomHeader,
}

export default meta;

export const Primary:StoryObj = {
    name: 'RoomHeader',
    args: {
        title: 'text',
        count: 100,
    }
}