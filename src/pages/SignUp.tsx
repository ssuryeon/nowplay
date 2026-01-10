import styled from 'styled-components';
import {Container} from '../components/Container';
import Form from '../components/Form';
import BtnForm from '../components/BtnForm';
import Button from '../components/Button';
import {useForm} from 'react-hook-form';

const ErrorArea = styled.div`
    margin-top: 8px;
    margin-bottom: 30px;
    height: 20px;
    font-size: 16px;
    font-weight: 300;
    color: ${props => props.theme.white};
`;

interface IUser {
    username: string,
    id: string,
    password: string,
    confirmPassword: string,
    email: string,
    phone: string,
}

function SignUp() {
    const {register, handleSubmit, formState: {errors}, setError} = useForm({
        defaultValues: {
            username: '',
            id: '',
            password: '',
            confirmPassword: '',
            email: '',
            phone: '',
        }
    });
    const onSubmit = (data:IUser) => {
        if(data.password != data.confirmPassword) {
            setError('confirmPassword', {
                message: '비밀번호와 일치하지 않습니다.',
            }, {shouldFocus: true})
        }
        console.log(data);
    }

    return (
        <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box'}}>
            <div style={{width: '80%', marginTop: 50, marginBottom: 50, boxSizing: 'border-box'}}>
                <Container>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <BtnForm text="이름" fontSize={28} btnText='중복확인' register={{...register('username', {
                            required: '이름을 입력해주세요.',
                        })}}/>
                        <ErrorArea>{errors.username?.message}</ErrorArea>
                        <Form text="아이디" fontSize={28} register={{...register('id', {
                            required: '아이디를 입력해주세요.',
                        })}}/>
                        <ErrorArea>{errors.id?.message}</ErrorArea>
                        <Form text="비밀번호" fontSize={28} register={{...register('password', {
                            required: '비밀번호를 입력해주세요.',
                            minLength: {
                                value: 8,
                                message: '비밀번호는 8자 이상이어야 합니다.'
                            }
                        })}}/>
                        <ErrorArea>{errors.password?.message}</ErrorArea>
                        <Form text="비밀번호 확인" fontSize={28} register={{...register('confirmPassword', {
                            required: '비밀번호를 재작성해주세요.',
                            minLength: {
                                value: 8,
                                message: '비밀번호는 8자 이상이어야 합니다.'
                            }
                        })}}/>
                        <ErrorArea>{errors.confirmPassword?.message}</ErrorArea>
                        <Form text="이메일" fontSize={28} register={{...register('email', {
                            required: '이메일을 입력해주세요.',
                            pattern: {
                                value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                                message: '올바른 이메일 형식을 입력해주세요.'
                            }
                        })}}/>
                        <ErrorArea>{errors.email?.message}</ErrorArea>
                        <BtnForm text="전화번호" fontSize={28} btnText='인증하기' register={{...register('phone', {
                            required: '전화번호를 입력해주세요.'
                        })}}/>
                        <ErrorArea>{errors.phone?.message}</ErrorArea>
                        <div style={{height: 20}}></div>
                        <Button text="회원가입" fontSize={28}/>
                    </form>
                </Container>
            </div>
        </div>
    );
}

export default SignUp;