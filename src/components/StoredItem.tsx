import styled, {useTheme} from 'styled-components';
import { FaMusic } from "react-icons/fa6";

const ItemContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme.inputColor};
    border-radius: 15px;
    padding: 15px;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    align-items: center;
    box-sizing: border-box;
`;

const ImageArea = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 15px;
    margin-right: 20px;
`;

interface IStoredItem {
    imageUrl?: string,
    name: string,
    count: number,
}

function StoredItem({imageUrl, name, count}:IStoredItem){
    const theme = useTheme();

    return (
        <ItemContainer>
            <ImageArea style={{background: imageUrl? `url(${imageUrl}) no-repeat center center / cover` : theme.btnColor2}}/>
            <div style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center'}}>
                <span style={{color: theme.white, fontSize: 28, fontWeight: 700, marginBottom: 5}}>{name}</span>
                <span style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <FaMusic size={24} color={theme.textColor}/>
                    <span style={{color: theme.textColor, fontSize: 24, fontWeight: 600, marginLeft: 5}}>{count}</span>
                </span>
            </div>
        </ItemContainer>
    );
}

export default StoredItem;