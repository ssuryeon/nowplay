import styled from 'styled-components';

interface IButton {
    text: string,
    fontSize: number,
    style?: Object,
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => Promise<void>,
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

function Button({text, fontSize, style, onClick}:IButton) {

    return (
        <Btn style={{fontSize, ...style}} onClick={onClick}>{text}</Btn>
    );
}

export default Button;