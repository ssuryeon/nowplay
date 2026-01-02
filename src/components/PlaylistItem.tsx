import styled, {useTheme} from 'styled-components';
import { BsFillPersonFill } from "react-icons/bs";

const ListContainer = styled.div`
    width: 100%; 
    border-radius: 15px; 
    padding: 20px;
    box-sizing: border-box; 
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
`;

interface IPlaylistItem {
    text: string,
    people: number,
    isActive: boolean,
}

function PlaylistItem({text, people, isActive}:IPlaylistItem) {
    const theme = useTheme();

    return (
        <ListContainer style={{color: isActive? theme.black : theme.textColor, backgroundColor: isActive? theme.btnColor : theme.inputColor}}>
            <span>{text}</span>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <BsFillPersonFill size={20} />
                <span style={{marginLeft: 3}}>{people}</span>
            </div>
        </ListContainer>
    );
}

export default PlaylistItem;