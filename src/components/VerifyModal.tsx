import styled, {useTheme} from 'styled-components';

const Modal = styled.div`
    width: 500px;
    height: 250px;
    border-radius: 15px;
    background-color: ${props => props.theme.white};
    padding: 20px;
    box-sizing: border-box;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    box-sizing: border-box;
    margin-bottom: 10px;
`;

const Btn = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    background-color: ${props => props.theme.black};
    border: none;
    color: ${props => props.theme.white};
    cursor: pointer;
    &:hover {
        background-color: #505050;
    }
`;

interface iVerifyModal {
    value: string,
    onChange: any,
    onClick: any,
}

function VerifyModal({value, onChange, onClick}:iVerifyModal) {
    const theme = useTheme();
    
    return (
        <div style={{width: '100%', height: '100%', backgroundColor: '#00000079', position: 'fixed', top: 0, left: 0}}>
            <Modal>
                <form style={{display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'center'}}>
                    <span style={{fontSize: 20, color: theme.black, marginBottom: 20}}>인증코드를 입력해주세요.</span>
                    <div id='recaptcha-container' style={{marginBottom: 10}}></div>
                    <Input value={value} onChange={onChange}/>
                    <Btn onClick={onClick}>제출하기</Btn>
                </form>
            </Modal>
        </div>
    )
}

export default VerifyModal;