import styled from 'styled-components';

interface IButton {
    text: string,
    fontSize: number,
    style?: Object,
}

const Btn = styled.button`
    width: 100%; 
    padding: 20px; 
    color: ${props => props.theme.black}; 
    font-weight: 800;
    background-color: ${props => props.theme.btnColor}; 
    border-radius: 15px; 
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #505b4d;
    }
`;

function Button({text, fontSize, style}:IButton) {

    return (
        <Btn style={{fontSize, ...style}}>{text}</Btn>
    );
}

export default Button;