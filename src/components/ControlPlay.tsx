import {useTheme} from 'styled-components';
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";

function ControlPlay() {
    const theme = useTheme();

    return (
        <div style={{width: '60%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <IoPlaySkipBackSharp color={theme.white} size={40}/>
            <IoPauseSharp color={theme.white} size={45}/>
            <IoPlaySkipForwardSharp color={theme.white} size={40}/>
        </div>
    );
}

export default ControlPlay;