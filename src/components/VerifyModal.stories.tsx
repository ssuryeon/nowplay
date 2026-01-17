import {Meta, StoryObj} from '@storybook/react-webpack5';
import VerifyModal from './VerifyModal';

const meta:Meta = {
    title: 'SignUp/VerifyModal',
    component: VerifyModal,
}

export default meta;

export const Primary:StoryObj = {
    name: 'VerifyModal',
    args: {
        visible: true,
    }
}