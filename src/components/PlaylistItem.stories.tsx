import PlaylistItem from './PlaylistItem';
import {Meta, StoryObj} from '@storybook/react-webpack5';

const meta:Meta = {
    title: 'Nowplay/PlaylistItem',
    component: PlaylistItem,
}

export default meta;

export const Primary:StoryObj = {
    name: 'PlaylistItem',
    args: {
        text: 'test',
        people: 200,
        isActive: false,
        likes: 100,
    }
}