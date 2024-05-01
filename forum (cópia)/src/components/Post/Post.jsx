import styled from 'styled-components';
import { GoHeart } from "react-icons/go";
import { RiMessage3Line } from "react-icons/ri";
import { PiShareFatLight } from "react-icons/pi";
import { MdOutlineEdit, MdDone } from "react-icons/md";
import { useState } from 'react';

const PostContainer = styled.div`
    border-bottom: 1px solid #201658;
    margin-top: 20px;
`;

const ProfileImage = styled.img`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    object-fit: cover;
`;

const ProfileContent = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

const ProfileName = styled.h3`
    margin: 0;
`;

const iconStyle = {
    width: '25px',
    height: '25px',
    marginRight: '16px'
};

const SocialBtns = styled.div`
    margin-bottom: 10px;
`;

const editIconsStyle = { position: 'absolute', right: '20px' };



const Post = () => {
    const [editMode, setEditMode] = useState(false);
    const handleClick = () => setEditMode(!editMode);
    return (
        <PostContainer>
            <ProfileContent>
                <ProfileImage src="https://cdn.pixabay.com/photo/2016/11/22/23/14/terrier-1851108_1280.jpg" alt="profile pic" />
                <div>
                    <ProfileName>LovePuppies</ProfileName>
                    <span>3 de Janeiro de 2024</span>
                </div>
                <div onClick={handleClick}>
                    {
                        editMode ? <MdDone style={editIconsStyle}/> : <MdOutlineEdit style={editIconsStyle} />
                    }
                </div>
            </ProfileContent>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, voluptatem reprehenderit expedita consequatur sequi quos commodi tenetur dicta aliquid id ratione fuga voluptas maiores veritatis iste porro non assumenda consectetur. </p>
            <SocialBtns>
                <span><GoHeart style={iconStyle} /></span>
                <span><RiMessage3Line style={iconStyle} /></span>
                <span><PiShareFatLight style={iconStyle} /></span>
            </SocialBtns>
        </PostContainer>
    )
}

export default Post;