import styled, {useTheme} from 'styled-components';
import {useMatch} from 'react-router';
import {Container} from '../components/Container';
import {Outlet} from 'react-router';
import Menu from '../components/Menu';

function Main(){
    const nowMatch = useMatch('/main/nowplay');
    const rankMatch = useMatch('/main/rank');
    const storedMatch = useMatch('/main/stored');
    const profileMatch = useMatch('/main/profile');
    const theme = useTheme();

    return (
        <div style={{width: '100%', height: 'calc(100vh - 40px)', padding: 20, boxSizing: 'border-box', display: 'flex', flexDirection: 'column'}}>
            <h2 style={{fontSize: 36, fontWeight: 800, color: theme.white, textAlign: 'center', marginTop: 0, marginBottom: 15}}>NOWPLAY</h2>
            <Menu nowMatch={nowMatch != null} rankMatch={rankMatch != null} storedMatch={storedMatch != null} profileMatch={profileMatch != null} />
            <Container style={{marginTop: 20, height: 480, boxSizing: 'border-box'}}>
                <Outlet />
            </Container>
        </div>
    );
}

export default Main;