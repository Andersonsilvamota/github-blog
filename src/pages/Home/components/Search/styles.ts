import styled from "styled-components";

export const SearchPostContainer = styled.div`
  margin-top: 4.5rem;
  width: 54rem;
`
export const TitleInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 160%;
    margin-bottom: 0.75rem;
    color: ${props => props.theme["base-subtitle"]};
  }

  span {
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 160%;
    color: ${props => props.theme["base-span"]};
  }

`

export const SearchPostInput = styled.input`
  padding: 0.75rem 1rem;
  width: 100%;
  border-radius: 6px;
  background: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-border"]};
  color: ${props => props.theme["base-text"]};
  
`