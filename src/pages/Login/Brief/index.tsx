import { LoginBriefContainer, BriefContainer, BriefTitle1, BriefTitle2, BrieftTextContainer, BriefSubtitle } from './styled.component';

const Brief = () => {
    return(
        <LoginBriefContainer>
            <BriefContainer>
                <BrieftTextContainer>
                    <BriefTitle1>
                    Lorem ipsum dolor si amet
                    </BriefTitle1>
                    <BriefTitle2>
                    consectetur
                    </BriefTitle2>
                    <BriefSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</BriefSubtitle>
                </BrieftTextContainer>
            </BriefContainer>
    </LoginBriefContainer>
    )
}

export default Brief