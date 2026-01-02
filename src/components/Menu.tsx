import styled, {useTheme} from 'styled-components';

const Content = styled.div`
    display: flex;
    width: 100%;
    background-color: ${props => props.theme.containerColor};
    flex-direction: row;
    padding: 5px;
    border-radius: 15px;
    justify-content: space-between;
    box-sizing: border-box;
`;

const TabContent = styled.div`
    width: 15%;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    box-sizing: border-box;
    font-size: 24px;
    border-radius: 15px;
`;

interface ITab {
    text: string,
    isActive: boolean,
}

function Tab({text, isActive}:ITab) {
    const theme = useTheme();

    return (
        <TabContent style={{backgroundColor: isActive? theme.btnColor : 'transparent', color: isActive? theme.black : theme.textColor, fontWeight: isActive? 800 : 600}}>{text}</TabContent>
    )
}

interface IMenu {
    nowMatch: boolean,
    rankMatch: boolean,
    storedMatch: boolean,
    profileMatch: boolean,
}

function Menu({nowMatch, rankMatch, storedMatch, profileMatch}:IMenu) {
    return (
        <Content>
                <Tab text="NOWPLAY" isActive={nowMatch}/>
                <Tab text="Top20" isActive={rankMatch}/>
                <Tab text="저장된 플리" isActive={storedMatch}/>
                <Tab text="프로필" isActive={profileMatch}/>
        </Content>
    )
}

export default Menu;