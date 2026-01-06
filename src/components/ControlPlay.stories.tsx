import {Meta, StoryObj} from '@storybook/react-webpack5';
import ControlPlay from './ControlPlay';

const meta:Meta = {
    title: 'Room/ControlPlay',
    component: ControlPlay,
    decorators: [
        (Story) => (
            <div style={{backgroundColor: '#3C3D37', padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Story />
            </div>
        )
    ]
}

export default meta;

export const Primary:StoryObj = {
    name: 'ControlPlay'
}