import {Meta, StoryObj} from '@storybook/react-webpack5';
import MusicItem from './MusicItem';

const meta:Meta = {
    title: 'Room/MusicItem',
    component: MusicItem,
}

export default meta;

export const Primary:StoryObj = {
    name: 'MusicItem',
    args: {
        title: 'test',
        singer: 'singer',
        isActive: true,
    }
}