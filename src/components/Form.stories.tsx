import Form from './Form';
import {Meta, StoryObj} from '@storybook/react-webpack5';

const meta:Meta = {
    title: 'Components/Form',
    component: Form,
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
    name: 'Form',
    args: {
        text: 'test',
        fontSize: 20,
    }
}