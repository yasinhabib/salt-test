import styled from 'styled-components';

export const LoginBriefContainer = styled.div`
  width: 100vh;
  height: 100vh;
  background: #7879F1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 526px) {
    display: none
  }
`

export const BriefContainer = styled.div`
  width: calc(70%);
  height: calc(70% );
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(24px);
  display: flex;
  align-items: end;
`

export const BrieftTextContainer = styled.div`
  padding: 138px 88px 104px 88px;
`

export const BriefTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  margin: 0;
`

export const BriefTitle1 = styled(BriefTitle)`
  line-height: 120%;
  color: #FFFFFF;
`

export const BriefTitle2 = styled(BriefTitle)`
  line-height: 100%;
  color: #3E334E;
`

export const BriefSubtitle = styled.span`
  margin-top: 40px;
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;

  color: #3E334E;
`