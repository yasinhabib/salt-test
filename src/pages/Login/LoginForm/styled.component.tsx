import styled from 'styled-components';

export const LoginFormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    @media only screen and (max-width: 526px) {
        padding: 83px 24px;
    }
`

export const LoginFormContainer = styled.div`
    min-width: 416px;
    @media only screen and (max-width: 526px) {
        min-width: 100%;
    }
`

export const LoginTitle = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
    margin: 8px 0px;
    color: #3E334E;
`

export const LoginSubtitle = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;

    color: #3E334E;
`

export const LoginTitle2 = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;

    color: #3E334E;
    margin-top: 48px;

    @media only screen and (min-width: 526px) {
        display: none
    }
`

export const FormItemContainer = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media only screen and (max-width: 526px) {
        margin-top: 24px;
    }
`

export const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const FormLabel = styled.label`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #3E334E;
`

export const FormInputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
    position: relative;
`

export const FormInput = styled.input`
    border: 1px solid #AFA2C3;
    border-radius: 8px;
    padding: 16px;
    width: 100%;

    &.error{
        border: 1px solid #fa0d0d;
    }
`

export const ErrorMessage = styled.span`
    color: #fa0d0d;
    margin: 0;
    font-size: 12px;
`

export const FormIconButton = styled.button`
    border: none;
    background-color: transparent;
    position: absolute;
    right: 10px;
    top: 12px;
`

export const FormCheckboxContainer = styled.div`
    display: flex;
    gap: 8px;
`

export const FormCheckbox = styled.input`
    

    &:checked{
        background-color:green;
    }
`

export const Link = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    text-align: right;
    text-decoration-line: underline;

    color: #3E334E;
`

export const Button = styled.button`
    border-radius: 8px;
    padding: 16px;
    border: none;
    width: 100%;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
`

export const LoginButton = styled(Button)`
    background: #7879F1;
    color: #FFFFFF;
`

export const RegisterButton = styled(Button)`
    background: transparent;
    border: 1px solid #3E334E;
    color: #3E334E;
`

export const AlternateLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 16px;

    @media only screen and (max-width: 526px) {
        margin-top: 24px;
    }
`

export const AlternateLoginText = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;

    text-align: center;

    color: #3E334E;
    margin: 0;
`

export const AlternateLoginButtonGroup = styled.div`
    display: flex;
    display-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
`

export const AlternateLoginButton = styled.a`
    border: 1px solid #AFA2C3;
    border-radius: 4px;

    padding: 12px;
    width: 100%;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;

    text-decoration-line: none;
    text-align: center;
`