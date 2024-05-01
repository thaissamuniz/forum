import styled from 'styled-components';

const FormContainer = styled.div``;
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
    color: #fff;
    margin-bottom: 12px;
    border: 1px solid #430A5D;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    &::placeholder {
        color: #201658;
    }
`;
const FormBtn = styled.button`
    padding: 14px 16px;
    color: #fff;
    border: none;
    border-radius: 6px;
    background-color: #201658;
    cursor: pointer;
`;

const RegistrationForm = () => {
    return (
        <FormContainer>
            <FormTitle>Faça parte do nosso forum</FormTitle>
            <Form>
                <FormInput placeholder='Nome' required/>
                <FormInput placeholder='Sobrenome' required/>
                <FormInput type='email' placeholder='Email' required />
                <FormInput type='date' required/>
                <FormInput type='text' placeholder='Username' required/>
                <FormBtn>Cadastrar</FormBtn>
            </Form>
        </FormContainer>
    )
}

export default RegistrationForm;