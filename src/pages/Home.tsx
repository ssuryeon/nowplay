import styled, {useTheme} from 'styled-components';
import {Container} from '../components/Container';
import Form from '../components/Form';
import Button from '../components/Button';
import {useEffect} from 'react';
import {Link} from 'react-router';

const Logo = styled.h2`
    font-size: 48px;
    color: ${(props) => props.theme.white};
    font-weight: 800;
    text-align: center;
`;

function Home() {
    const theme = useTheme();
    return (
        <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: '28%'}}>
                <Logo>NOWPLAY</Logo>
                <Container>
                    <Form text='아이디'/>
                    <Form text='비밀번호' />
                    <Button text='로그인' fontSize={20}/>
                </Container>
                <span style={{display: 'block', textAlign: 'center', fontSize: 18, color: theme.white, width: '100%', marginTop: 20}}>회원이 아니신가요? 
                    <Link to="/signup"><span style={{color: theme.textColor, cursor: 'pointer'}}>회원가입</span></Link>
                </span>
            </div>
        </div>
    );
}

export default Home;