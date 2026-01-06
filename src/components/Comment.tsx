import styled, {useTheme} from 'styled-components';

const UserImage = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 5px;
`;

interface IComment {
    imageUrl?: string,
    username: string,
    comment: string,
}

function Comment({imageUrl, username, comment}:IComment) {
    const theme = useTheme();

    return (
        <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
            <UserImage style={{background: imageUrl? `url(${imageUrl}) no-repeat center center / cover` : theme.white}}/>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <span style={{fontSize: 18, fontWeight: 700, color: theme.white}}>{username}</span>
                <span style={{fontSize: 14, fontWeight: 300, color: theme.textColor}}>{comment}</span>
            </div>
        </div>
    );
}

export default Comment;