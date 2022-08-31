import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FullPost } from "./components/FullPost";
import { FullPostContainer } from "./components/FullPost/styles";
import { ContainerPost, ContainerPostHeader, LinksNavigation, SocialMediaPost } from "./styles";

export function Post() {
  return (
    <ContainerPost>
      <ContainerPostHeader>
        <LinksNavigation>
          <div>
            <FontAwesomeIcon icon={faChevronLeft} /> 
            <strong>VOLTAR</strong>
          </div>
          <div>
            <strong>VER NO GITHUB</strong>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </LinksNavigation>
        <h2>JavaScript data types and data structures</h2>
        <SocialMediaPost>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <strong>andersonsilv</strong>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <strong>Há 1 dia</strong>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <strong>5 comentários</strong>
          </div> 
        </SocialMediaPost>
      </ContainerPostHeader>
      <FullPost />
    </ContainerPost>
  )
}