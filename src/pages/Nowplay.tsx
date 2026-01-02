import styled, {useTheme} from 'styled-components';

const DetailContainer = styled.div`
    flex: 1;
    height: 100%;
    background-color: ${props => props.theme.btnColor};
    padding: 20px;
    border-radius: 20px;
    box-sizing: border-box;
    margin-left: 10px;
`;

interface IPlaylistItem {
    text: string,
    people: number,
    isActive: boolean,
}

const ListContainer = styled.div`
    width: 100%; 
    border-radius: 15px; 
    padding: 10px; 
    box-sizing: border-box; 
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;
`;

function PlaylistItem({text, people, isActive}:IPlaylistItem) {
    const theme = useTheme();

    return (
        <ListContainer style={{color: isActive? theme.black : theme.textColor, backgroundColor: isActive? theme.btnColor : theme.inputColor}}>
            <span>{text}</span>
            <span>{people}</span>
        </ListContainer>
    );
}

function Nowplay(){
    return (
        <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row'}}>
            <div style={{flex: 1, height: '100%', boxSizing: 'border-box', border: '1px solid red', marginRight: 10}}></div>
            <DetailContainer></DetailContainer>
        </div>
    )
}

export default Nowplay;