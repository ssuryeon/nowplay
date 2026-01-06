import styled from 'styled-components';
import { IoIosArrowBack } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";

const Container = styled.div`
    background-color: ${props => props.theme.btnColor};
    width: 100%;
    height: 72px;
    padding: 20px;
    color: ${props => props.theme.black};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
`;

interface IHeader {
    title: string,
    count: number,
}

function RoomHeader({title, count}:IHeader){
    return (
        <Container>
                <span style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <IoIosArrowBack size={32}/>
                    <span style={{marginLeft: 5, fontSize: 28, fontWeight: 700}}>{title}</span>
                </span>
                <span style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <BsFillPersonFill size={32}/>
                    <span style={{marginLeft: 5, fontSize: 28, fontWeight: 700}}>{count}</span>
                </span>
        </Container>
    )
}

export default RoomHeader;