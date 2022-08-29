import { Profile } from "./components/Profile";
import { SearchPost } from "./components/Search";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchPost />
    </HomeContainer>
  )
}