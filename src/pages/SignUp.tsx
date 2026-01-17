import styled from 'styled-components';
import {Container} from '../components/Container';
import Form from '../components/Form';
import BtnForm from '../components/BtnForm';
import Button from '../components/Button';
import VerifyModal from '../components/VerifyModal';
import {useForm} from 'react-hook-form';
import {checkDuplicate, IUser, requestPhone, createUser, certifyPhone} from '../firebase';
import React, {useState, useEffect} from 'react';

const ErrorArea = styled.div`
    margin-top: 8px;
    margin-bottom: 30px;
    height: 20px;
    font-size: 16px;
    font-weight: 300;
    color: ${props => props.theme.white};
`;

function SignUp() {
    const {register, handleSubmit, formState: {errors}, setError, watch} = useForm({
        defaultValues: {
            username: '',
            id: '',
            password: '',
            confirmPassword: '',
            email: '',
            phone: '',
        }
    });
    const username = watch('username');
    const phone = watch('phone');
    const [verifyNum, setVerifyNum] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [vid, setVid] = useState('');
    const [pcredential, setPcredential] = useState<any>(null);

    useEffect(() => {
        if(!showModal) return;
        const rid = requestAnimationFrame(async () => {
            const id = await requestPhone(phone);
            console.log('requestPhone result: ', id);
            if(id) setVid(id);
            else alert('유효하지 않은 전화번호입니다.');
        });

        return () => cancelAnimationFrame(rid);
    }, [showModal, phone])
    
    const checkUsername = async (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        const res = await checkDuplicate(username);
        console.log(res);
        if(res) {
            alert('유효하지 않은 이름입니다, 다시 설정해주세요.');
            setError('username', {
                message: '유효하지 않은 이름입니다.'
            })
        }
        else alert('유효한 이름입니다.');
    }

    const verifyPhone = async (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        setShowModal(true);
    }
    const onChange= (e:React.FormEvent<HTMLInputElement>) => {
        setVerifyNum(e.currentTarget.value);
    }
    const onClick = (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        const code = verifyNum;
        var phoneCredential = certifyPhone(vid, code);
        phoneCredential.then((credential) => {
            console.log(credential);
            setPcredential(credential);
        });
        setShowModal(false);
    }

    const onSubmit = async (data:IUser) => {
        if(data.password != data.confirmPassword) {
            setError('confirmPassword', {
                message: '비밀번호와 일치하지 않습니다.',
            }, {shouldFocus: true})
        }
        else {
            console.log(data);
            // insertUser(data);
            console.log('credential: ', pcredential);
            var signIn = await createUser(data.email, data.password, pcredential);
            console.log('createUser result: ', signIn);
            if(!signIn) alert('로그인 오류 발생');
            else {
                signIn.then((res:any) => {
                    console.log(res);
                })
            }
        }
    }
    return (
        <>
            <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box'}}>
                <div style={{width: '80%', marginTop: 50, marginBottom: 50, boxSizing: 'border-box'}}>
                    <Container>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <BtnForm text="이름" fontSize={28} btnText='중복확인' register={{...register('username', {
                                required: '이름을 입력해주세요.',
                                validate: {
                                    duplicate: async (value) => await checkDuplicate(value)? '유효하지 않은 이름입니다.' : true
                                }
                            })}} onClick={checkUsername}/>
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
                            })}} onClick={verifyPhone} id='phoneVerifyBtn'/>
                            <ErrorArea>{errors.phone?.message}</ErrorArea>
                            <div style={{height: 20}}></div>
                            <Button text="회원가입" fontSize={28}/>
                        </form>
                    </Container>
                </div>
            </div>
            <VerifyModal value={verifyNum} onChange={onChange} onClick={onClick} visible={showModal}/>
        </>
    );
}

export default SignUp;