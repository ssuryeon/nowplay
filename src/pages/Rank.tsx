import styled from 'styled-components';
import RankItem from '../components/RankItem';

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.textColor};
        border-radius: 10px;
    }
`;

function Rank(){
    return (
        <Container>
            <RankItem rank={1} name={'재즈음악'} likes={244}/>
            <RankItem rank={2} name={'재즈음악'} likes={176}/>
            <RankItem rank={3} name={'재즈음악'} likes={155}/>
            <RankItem rank={4} name={'재즈음악'} likes={68}/>
            <RankItem rank={5} name={'재즈음악'} likes={53}/>
            <RankItem rank={6} name={'재즈음악'} likes={33}/>
            <RankItem rank={7} name={'재즈음악'} likes={14}/>
            <RankItem rank={8} name={'재즈음악'} likes={3}/>
        </Container>
    );
}

export default Rank;