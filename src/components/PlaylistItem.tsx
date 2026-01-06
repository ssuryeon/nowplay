import styled, {useTheme} from 'styled-components';
import { BsFillPersonFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";

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
    cursor: pointer;
`;

interface IPlaylistItem {
    text: string,
    people: number,
    likes: number,
    isActive: boolean,
}

function PlaylistItem({text, people, likes, isActive}:IPlaylistItem) {
    const theme = useTheme();

    return (
        <ListContainer style={{color: isActive? theme.black : theme.textColor, backgroundColor: isActive? theme.btnColor : theme.btnColor2}}>
            <span>{text}</span>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: 130, position: 'relative'}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%', position: 'absolute', left: 0}}>
                    <BsFillPersonFill size={20} />
                    <span style={{marginLeft: 3}}>{people}</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%', position: 'absolute', left: '50%'}}>
                    <FaHeart size={20}/>
                    <span style={{marginLeft: 3}}>{likes}</span>
                </div>
            </div>
        </ListContainer>
    );
}

export default PlaylistItem;