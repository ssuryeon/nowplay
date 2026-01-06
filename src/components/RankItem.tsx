import styled, {useTheme} from 'styled-components';
import { FaHeart } from "react-icons/fa6";

const ItemContainer = styled.div`
    width: 100%;
    height: 80px;
    border-radius: 15px;
    background-color: ${props => props.theme.inputColor};
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
`;

interface IRankItem {
    rank: number,
    name: string,
    likes: number,
}

function RankItem({rank, name, likes}:IRankItem){
    const theme = useTheme();

    return (
        <ItemContainer>
            <span style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <h2 style={{fontSize: 35, fontWeight: 900, color: theme.white, display: 'inline-block', marginRight: 10}}>{rank}</h2>
                <span style={{fontSize: 28, fontWeight: 700, color: theme.textColor}}>{name}</span>
            </span>
            <span style={{width: 100, height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <FaHeart size={24} style={{color: theme.textColor, marginRight: 10}}/>
                <span style={{fontSize: 28, fontWeight: 700, color: theme.textColor}}>{likes}</span>
            </span>
        </ItemContainer>
    )
}

export default RankItem;