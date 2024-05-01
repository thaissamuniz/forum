import styled from 'styled-components';
import searchIcon from '../../assets/lupa.png';

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const Logo = styled.h1`
    font-size: 23px;
`;
const MenuItems = styled.ul``;
const Search = styled.input`
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid #001797;
    padding: 8px;
    background-image: url(${searchIcon});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-position-x: 95%;
`;
const UserImage = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-left: auto;
`;


const Menu = () => {
    return (
        <MenuContainer>
            <Logo>Forum</Logo>
            <Search type='search' placeholder='o que você procura?' />
            <UserImage src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />
        </MenuContainer>
    )
}

export default Menu;