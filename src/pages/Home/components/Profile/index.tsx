import { InfoContent, LinkGithub, NameProfile, ProfileContainer, ProfileImage, SocialMediaProfile } from "./styles";
import iconGithub from '../../../../assets/github.svg'
import iconPredio from '../../../../assets/predio.svg'
import iconPeople from '../../../../assets/people.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUpRightFromSquare, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage src="https://github.com/Andersonsilvamota.png" alt="" />
      <InfoContent>
        <NameProfile>
          <h2>Anderson Mota</h2>
          <LinkGithub>
            <strong>GITHUB</strong>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </LinkGithub>
        </NameProfile>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        <SocialMediaProfile>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <strong>andersonsilv</strong>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <strong>rocketseat</strong>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <strong>32 seguidores</strong>
          </div>      
        </SocialMediaProfile>
      </InfoContent>
    </ProfileContainer>
  )
}