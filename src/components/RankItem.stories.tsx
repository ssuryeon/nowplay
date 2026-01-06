import {Meta, StoryObj} from '@storybook/react-webpack5';
import RankItem from './RankItem';

const meta:Meta = {
    title: 'Rank/RankItem',
    component: RankItem,
}

export default meta;

export const Primary:StoryObj = {
    name: 'RankItem',
    args: {
        rank: 1,
        name: 'test',
        likes: 999,
    }
}