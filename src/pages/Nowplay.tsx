import styled, {useTheme} from 'styled-components';
import PlaylistItem from '../components/PlaylistItem';
import Button from '../components/Button';
import SearchInput from '../components/SearchInput';

const LeftContainer = styled.div`
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    margin-right: 10px;
    overflow: auto;
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

const DetailContainer = styled.div`
    flex: 1;
    height: 100%;
    background-color: ${props => props.theme.btnColor};
    padding: 20px;
    border-radius: 20px;
    box-sizing: border-box;
    margin-left: 10px;
    display: flex;
    justify-content: center;
`;

function Nowplay(){
    const theme = useTheme();

    return (
        <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row'}}>
            <LeftContainer>
                <SearchInput />
                <PlaylistItem text='케이팝 플리' people={15} likes={216} isActive={true}/>
                <PlaylistItem text='케이팝 플리' people={155} likes={333} isActive={false}/>
                <PlaylistItem text='케이팝 플리' people={15} likes={78} isActive={false}/>
                <PlaylistItem text='케이팝 플리' people={15} likes={104} isActive={false}/>
                <PlaylistItem text='케이팝 플리' people={15} likes={23} isActive={false}/>
                <PlaylistItem text='케이팝 플리' people={15} likes={134} isActive={false}/>
            </LeftContainer>
            <DetailContainer>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', width: 320, position: 'relative'}}>
                    <div style={{width: 150, height: 150, borderRadius: 20, backgroundColor: theme.white, position: 'relative', top: 0}}></div>
                    <h3 style={{fontSize: 36, marginTop: 10, marginBottom: 0}}>케이팝 플리</h3>
                    <span style={{textAlign: 'center', marginTop: 10, color: theme.inputColor}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsum dolorem impedit consectetur, porro beatae doloribus placeat vero commodi voluptatem!</span>
                    <Button text='입장하기' fontSize={24} style={{backgroundColor: theme.textColor, width: 320, padding: 10, position: 'absolute', bottom: 0}}/>
                </div>
            </DetailContainer>
        </div>
    )
}

export default Nowplay;