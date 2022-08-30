import styled from "styled-components";

export const ContainerPost = styled.div`
  width: 54rem;
  max-width: 54rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 10px;
  background: ${props => props.theme["base-profile"]};
  margin-top: calc(0px - 4.5rem - 10px);
  
  h2 {
    color: ${props => props.theme["base-title"]};
    font-size: 1.5rem;
  }
`

export const LinksNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme["blue"]};
  
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px ;
    font-size: 0.75rem;
    cursor: pointer;
    border: 1px solid transparent;


    &:hover {
      border-bottom: 1px solid ${props => props.theme.blue};
    }
    
  }

`

export const SocialMediaPost = styled.div`
  display: flex;
  gap: 1.5rem;

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