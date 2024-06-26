import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const baseUrl = "https://forum-51b05-default-rtdb.firebaseio.com/posts.json"

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
`;
const FormTitle = styled.h2`
    color: #201658;
    text-align: center;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const FormInput = styled.input`
    padding: 14px 16px;
    background-color: transparent;
    margin-bottom: 12px;
    border: 1px solid #430A5D;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    width: 300px;

    &::placeholder {
        color: #201658;
    }
`;
const FormBtn = styled.button`
    padding: 14px 16px;
    margin-bottom: 15px;
    color: #fff;
    border: none;
    border-radius: 6px;
    background-color: #201658;
    cursor: pointer;
`;

const linkStyles = {
    color: '#201658',
    fontSize: '15px'
}

const RegistrationForm = () => {
    return (
        <FormContainer>
            <FormTitle>Faça parte do nosso forum</FormTitle>
            <Form>
                <FormInput placeholder='nome' required />
                <FormInput placeholder='sobrenome' required />
                <FormInput type='email' placeholder='email' required />
                <FormInput type='date' required />
                <FormInput type='text' placeholder='senha' required />
                <FormBtn>Cadastrar</FormBtn>
            </Form>
            <NavLink to={'/home'} style={linkStyles}>continuar sem cadastro</NavLink>
        </FormContainer>
    )
}

export default RegistrationForm;