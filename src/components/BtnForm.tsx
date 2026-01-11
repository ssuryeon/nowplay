import styled from 'styled-components';
import Button from './Button';

const TextArea = styled.span`
    color: ${props => props.theme.textColor};
    font-size: 20px;
    font-weight: 700;
`;

const Input = styled.input`
    width: 83%;
    height: 80px;
    border-radius: 15px;
    background-color: ${props => props.theme.inputColor};
    border: none;
    outline: none;
    padding: 20px;
    box-sizing: border-box;
    color: ${props => props.theme.white};
    font-weight: 700;
`;

interface IForm {
    text: string,
    fontSize?: number,
    btnText: string,
    register?: Object,
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => Promise<void>,
    id?: string,
}

function BtnForm({text, fontSize, btnText, register, onClick, id}:IForm) {
    return (
        <div style={{boxSizing: 'border-box', display: 'flex', flexDirection: 'column', marginBottom: 15}}>
            <TextArea>{text}</TextArea>
            <span style={{width: '100%', height: 80, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, boxSizing: 'border-box'}}>
                <Input style={{fontSize: fontSize? fontSize : 20}} {...register}/>
                <Button text={btnText} fontSize={24} style={{width: '15%', height: 80, boxSizing: 'border-box'}} onClick={onClick} id={id}/>
            </span>
        </div>
    );
}

export default BtnForm;