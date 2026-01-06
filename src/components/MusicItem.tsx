import styled, {useTheme} from 'styled-components';

const ItemContainer = styled.div`
    width: 100%;
    border-radius: 15px;
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 10px;
`;

interface IMusicItem {
    title: string,
    singer: string,
    isActive: boolean,
}

function MusicItem({title, singer, isActive}:IMusicItem) {
    const theme = useTheme();

    return (
        <ItemContainer style={{backgroundColor: isActive? theme.btnColor : theme.btnColor2}}>
            <h2 style={{color: theme.black, fontSize: 24, fontWeight: 700, margin: 0}}>{title}</h2>
            <span style={{color: theme.inputColor, fontSize: 18, fontWeight: 700, marginLeft: 10}}>{singer}</span>
        </ItemContainer>
    )
}

export default MusicItem;