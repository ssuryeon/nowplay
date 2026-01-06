import styled, {useTheme} from 'styled-components';
import RoomHeader from '../components/RoomHeader';
import MusicItem from '../components/MusicItem';
import Comment from '../components/Comment';
import ControlPlay from '../components/ControlPlay';
import { IoHeadset } from "react-icons/io5";

const Container = styled.div`
    flex: 1;
    height: 100%;
    background-color: ${props => props.theme.containerColor};
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    width: 120px;
    height: 50px;
    font-size: 24px;
    font-weight: 600;
    background-color: ${props => props.theme.textColor};
    padding: 10px;
    box-sizing: border-box;
    border-radius: 15px;
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    &:hover {
        background-color: #d3ba94;
    }
`;

const Area = styled.div`
    background-color: ${props => props.theme.inputColor};
    border-radius: 15px;
    width: 100%;
    padding: 15px;
    overflow-y: auto;
    box-sizing: border-box;
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

const MusicImage = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 15px;
    background-color: ${props => props.theme.inputColor};
`;

const LyricsArea = styled.div`
    width: 100%;
    height: 18%;
    font-size: 24px;
    font-weight: 600;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${props => props.theme.btnColor2};
    margin-bottom: 30px;
    span:first-of-type {
        color: ${props => props.theme.white}
    }
    &::-webkit-scrollbar {
        display: none;
    }
`;

const AlertContainer = styled.div`
    width: 530px;
    height: 80px;
    padding: 15px;
    box-sizing: border-box;
    background-color: ${props => props.theme.btnColor};
    border-radius: 15px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

function PlaylistRoom(){
    const theme = useTheme();

    return (
        <div style={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
            <RoomHeader title='케이팝 플리' count={15} />
            <div style={{width: '100%', height: 'calc(100vh - 72px)', padding: 30, boxSizing: 'border-box', display: 'flex', flexDirection: 'row'}}>
                <Container style={{marginRight: 15}}>
                    <div style={{width: '100%', height: 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, boxSizing: 'border-box'}}>
                        <h3 style={{fontSize: 28, color: theme.textColor, fontWeight: 700}}>플레이리스트</h3>
                        <span>
                            <Button style={{marginRight: 5}}>추가하기</Button>
                            <Button>저장하기</Button>
                        </span>
                    </div>
                    <Area style={{height: '50%', marginBottom: 20}} id='playlist'>
                        <MusicItem title='노래제목' singer='가수' isActive={true}/>
                        <MusicItem title='노래제목1' singer='가수' isActive={false}/>
                        <MusicItem title='노래제목2' singer='가수' isActive={false}/>
                        <MusicItem title='노래제목3' singer='가수' isActive={false}/>
                        <MusicItem title='노래제목4' singer='가수' isActive={false}/>
                        <MusicItem title='노래제목5' singer='가수' isActive={false}/>
                    </Area>
                    <Area style={{height: '35%'}} id='chat'>
                        <Comment imageUrl='https://media.istockphoto.com/id/1154370446/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EC%A0%9C%EC%8A%A4%EC%B2%98%EB%A5%BC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EB%8A%94-%EB%85%B9%EC%83%89-%EC%84%A0%EA%B8%80%EB%9D%BC%EC%8A%A4%EC%97%90-%EC%9E%AC%EB%AF%B8-%EB%84%88%EA%B5%AC%EB%A6%AC.jpg?s=612x612&w=0&k=20&c=atEjJlw_9g7W6SBgISn3sebRa94-zw5GGgyeddCf-AU=' username='사용자1' comment='이 노래에서 지금 부분이 너무 좋더라구요'/>
                        <Comment username='사용자2' comment='안녕하세요~'/>
                        <Comment username='사용자3' comment='안녕하세요~~'/>
                        <Comment username='사용자4' comment='안녕하세요~~~'/>
                    </Area>
                </Container>
                <Container style={{marginLeft: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <MusicImage />
                    <span style={{marginTop: 10, marginBottom: 20, width: '100%', fontSize: 30, fontWeight: 700, color: theme.white, textAlign: 'center'}}>노래제목</span>
                    <LyricsArea>
                        <span>가사1</span>
                        <span>가사2</span>
                        <span>가사3</span>
                        <span>가사4</span>
                        <span>가사5</span>
                    </LyricsArea>
                    <ControlPlay />
                </Container>
            </div>
            <AlertContainer>
                <IoHeadset size={28} color={theme.black}/><span style={{fontSize: 28, fontWeight: 600, color: theme.black, marginLeft: 10}}>사용자1 님이 ㅁㅁㅁㅁㅁ 노래 추가</span>
            </AlertContainer>
        </div>
    );
}

export default PlaylistRoom;