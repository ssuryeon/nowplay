import styled from 'styled-components';

const Logo = styled.h2`
    font-size: 64px;
    color: ${(props) => props.theme.white};
    font-weight: 800;
`;

function Home() {
    return (
        <div>
            <Logo>NOWPLAY</Logo>
        </div>
    );
}

export default Home;