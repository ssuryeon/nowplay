import { IoSearch } from "react-icons/io5";
import styled, {useTheme} from 'styled-components';

const Input = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 15px;
    background-color: ${props => props.theme.inputColor};
    border: none;
    outline: none;
    font-size: 20px;
    color: ${props => props.theme.textColor};
    font-weight: 700;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 60px;
`;

function SearchInput() {
    const theme = useTheme();

    return (
        <div style={{width: '100%', height: 50, position: 'relative', marginBottom: 25, boxSizing: 'border-box'}}>
                    <Input placeholder="NOWPLAY 검색"/>
                    <IoSearch color={theme.textColor} size={35} style={{position: 'absolute', right: 15, top: '50%', transform: 'translateY(-50%)'}}/>
        </div>
    );
}

export default SearchInput;