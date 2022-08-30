import styled from "styled-components";

export const ContainerPostTimeline = styled.div`
 
  display: grid;
  grid-template-columns: 416px 416px;
  //grid-template-rows: 260px 260px;
  gap: 2rem;
  margin-top: 4rem;
`

export const CardPost = styled.div`
  padding: 2.5rem 2rem;
  border-radius: 10px;
  background-color: ${props => props.theme["base-post"]};
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${props => props.theme["base-border"]};
    
    background: ${props => props.theme["base-background"]};
  }

  > div {
    display: flex;
    justify-content: space-between;
  
  }

  span {
    font-size: 0.875rem;
    color: ${props => props.theme["base-span"]}
  }

  h2 {
    font-size: 1.25rem;
    color: ${props => props.theme["base-title"]};
    margin-bottom: 2rem;
    max-width: 17.688rem;
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme["base-text"]};
  }
`