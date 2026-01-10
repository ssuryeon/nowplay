import {Container} from '../components/Container';
import Form from '../components/Form';
import BtnForm from '../components/BtnForm';
import Button from '../components/Button';

function SignUp() {
    return (
        <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box'}}>
            <div style={{width: '80%', marginTop: 50, marginBottom: 50, boxSizing: 'border-box'}}>
                <Container>
                    <BtnForm text="이름" fontSize={28} btnText='중복확인'/>
                    <Form text="아이디" fontSize={28}/>
                    <Form text="비밀번호" fontSize={28}/>
                    <Form text="이메일" fontSize={28}/>
                    <BtnForm text="전화번호" fontSize={28} btnText='인증하기'/>
                    <div style={{height: 20}}></div>
                    <Button text="회원가입" fontSize={28}/>
                </Container>
            </div>
        </div>
    );
}

export default SignUp;