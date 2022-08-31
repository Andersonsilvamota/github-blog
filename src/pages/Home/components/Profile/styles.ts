import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 13.25rem;
  width: 54rem;
  padding: 1rem 2rem 1rem 2.5rem;
  border-radius: 10px;
  background: ${props => props.theme["base-profile"]};
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: calc(0px - 4.5rem - 10px);
`

export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 38.25rem;
  height: 8.75rem;

  p{
    color: ${props => props.theme["base-text"]};
    line-height: 160%;
    font-size: 1rem;
    font-weight: normal;
  }
` 

export const NameProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h2 {
    size: 1.5rem;
    color: ${props => props.theme["base-title"]};
  }
`

export const SocialMediaProfile = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0.5rem 0 0 0 ;

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${props => props.theme["base-label"]};
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;

  }

  strong {
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1rem;
    font-weight: normal;
  }
`
export const LinkGithub = styled.a`
  display: flex;
  gap: 6px;
  cursor: pointer;
  color: ${props => props.theme["blue"]};
  font-size: 0.75rem;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid ${props => props.theme.blue};
  }

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
`