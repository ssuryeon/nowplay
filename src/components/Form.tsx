import styled from 'styled-components';

const TextArea = styled.span`
    color: ${props => props.theme.textColor};
    font-size: 20px;
    font-weight: 700;
`;

const Input = styled.input`
    margin-top: 10px;
    width: 100%;
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
    register?: Object,
}

function Form({text, fontSize, register}:IForm) {
    return (
        <div style={{boxSizing: 'border-box'}}>
            <TextArea>{text}</TextArea>
            <Input style={{fontSize: fontSize? fontSize : 20}} {...register}/>
        </div>
    );
}

export default Form;