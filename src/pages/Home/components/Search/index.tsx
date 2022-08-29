import { SearchPostContainer, SearchPostInput, TitleInput } from "./styles";

export function SearchPost() {
  return (
    <SearchPostContainer>
      <TitleInput>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </TitleInput>
      <SearchPostInput type="text" placeholder="Buscar conteúdo" />
    </SearchPostContainer>
  )
}