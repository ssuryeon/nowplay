import styled from 'styled-components';
import {Container} from '../components/Container';
import Form from '../components/Form';
import Button from '../components/Button';

function SignUp() {
    return (
        <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: '80%', paddingTop: 50}}>
                <Container>
                    <Form text="이름" fontSize={28}/>
                    <Form text="아이디" fontSize={28}/>
                    <Form text="비밀번호" fontSize={28}/>
                    <Form text="이메일" fontSize={28}/>
                    <Form text="전화번호" fontSize={28}/>
                    <div style={{height: 20}}></div>
                    <Button text="회원가입" fontSize={28}/>
                </Container>
            </div>
        </div>
    );
}

export default SignUp;