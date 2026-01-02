import styled, {useTheme} from 'styled-components';
import {useMatch} from 'react-router';
import {Container} from '../components/Container';
import {Outlet} from 'react-router';

const Menu = styled.div`
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

function Main(){
    const nowMatch = useMatch('/main/nowplay');
    const rankMatch = useMatch('/main/rank');
    const storedMatch = useMatch('/main/stored');
    const profileMatch = useMatch('/main/profile');
    const theme = useTheme();

    return (
        <div style={{width: '100%', height: 'calc(100vh - 40px)', padding: 20, boxSizing: 'border-box', display: 'flex', flexDirection: 'column'}}>
            <h2 style={{fontSize: 36, fontWeight: 800, color: theme.white, textAlign: 'center', marginTop: 0, marginBottom: 15}}>NOWPLAY</h2>
            <Menu>
                <Tab text="NOWPLAY" isActive={nowMatch != null}/>
                <Tab text="Top20" isActive={rankMatch != null}/>
                <Tab text="저장된 플리" isActive={storedMatch != null}/>
                <Tab text="프로필" isActive={profileMatch != null}/>
            </Menu>
            <Container style={{marginTop: 20, height: 480, boxSizing: 'border-box'}}>
                <Outlet />
            </Container>
        </div>
    );
}

export default Main;