import { useState } from "react";
import { LoginFormContainer, FormItem, FormItemContainer, FormLabel, LoginFormWrapper, LoginSubtitle, LoginTitle, FormInput, FormInputContainer, FormCheckbox, Link, FormCheckboxContainer, LoginButton, RegisterButton, AlternateLoginContainer, AlternateLoginText, AlternateLoginButtonGroup, AlternateLoginButton, LoginTitle2, FormIconButton, ErrorMessage } from "./styled.component"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "./schemaResolver";

const LoginForm = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return(
        <LoginFormWrapper>
            <LoginFormContainer>
                <LoginTitle>
                    Hello
                </LoginTitle>
                <LoginSubtitle>
                    Enter your email and password to login.
                </LoginSubtitle>
                <LoginTitle2>
                    Login
                </LoginTitle2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormItemContainer>
                        <FormItem>
                            <FormLabel>
                                Email
                            </FormLabel>
                            <FormInputContainer>
                                <FormInput type="text"  {...register("email")} className={errors.email ? 'error' : ''}/>
                            </FormInputContainer>
                            {errors.email && (
                                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                            )}
                        </FormItem>
                        <FormItem>
                            <FormLabel>
                                Password
                            </FormLabel>
                            <FormInputContainer>
                                <FormInput type={passwordVisibility ? 'text' : 'password'} {...register("password")} className={errors.password ? 'error' : ''}/>
                                <FormIconButton onClick={() => setPasswordVisibility(!passwordVisibility)}>
                                    {
                                        passwordVisibility ? <VisibilityIcon /> : <VisibilityOffIcon />
                                    }
                                    
                                </FormIconButton>
                            </FormInputContainer>
                            {errors.password && (
                                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                            )}
                        </FormItem>
                        <FormItem>
                            <FormInputContainer>
                                <FormCheckboxContainer>
                                    <FormCheckbox type="checkbox" />
                                    <span>Remember me</span>
                                </FormCheckboxContainer>
                                <Link>Forgot Password</Link>
                            </FormInputContainer>
                        </FormItem>
                        <FormItem>
                            <FormInputContainer>
                                <LoginButton type="submit">Login</LoginButton>
                                <RegisterButton>Sign Up</RegisterButton>
                            </FormInputContainer>
                        </FormItem>
                    </FormItemContainer>
                </form>
                <AlternateLoginContainer>
                    <AlternateLoginText>
                        Or, login with
                    </AlternateLoginText>
                    <AlternateLoginButtonGroup>
                        <AlternateLoginButton>
                            Facebook
                        </AlternateLoginButton>
                        <AlternateLoginButton>
                            Linked In
                        </AlternateLoginButton>
                        <AlternateLoginButton>
                            Google
                        </AlternateLoginButton>
                    </AlternateLoginButtonGroup>
                </AlternateLoginContainer>
            </LoginFormContainer>
        </LoginFormWrapper>
    )
}

export default LoginForm