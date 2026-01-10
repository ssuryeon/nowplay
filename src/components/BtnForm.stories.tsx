import BtnForm from './Form';
import {Meta, StoryObj} from '@storybook/react-webpack5';

const meta:Meta = {
    title: 'Shared/BtnForm',
    component: BtnForm,
    decorators: [
        (Story) => (
            <div style={{backgroundColor: '#3C3D37', padding: 30}}>
                <Story />
            </div>
        )
    ]
}

export default meta;

export const Primary:StoryObj = {
    name: 'BtnForm',
    args: {
        text: 'test',
        fontSize: 20,
        btnText: 'test',
    }
}