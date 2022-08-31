import { InfoContent, LinkGithub, NameProfile, ProfileContainer, ProfileImage, SocialMediaProfile } from "./styles";
import iconGithub from '../../../../assets/github.svg'
import iconPredio from '../../../../assets/predio.svg'
import iconPeople from '../../../../assets/people.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUpRightFromSquare, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

type ProfileResponse = {
  name: string;
  avatar_url: string;
}

type User = {
  name: string;
  login: string;
  bio: string;
  followers: number;
  link: string
}

export function Profile() {
  const [profile, setProfile] = useState<User>({} as User)

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/Andersonsilvamota")
   
      console.log(response.data)
      setProfile({
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        followers: response.data.followers,
        link: response.data.html_url
      })
    }
    fetchData()
  }, [])

  return (
    <ProfileContainer>
      <ProfileImage src="https://github.com/Andersonsilvamota.png" alt="" />
      <InfoContent>
        <NameProfile>
          <h2>{profile.name}</h2>
          <LinkGithub href={profile.link} target="_blank">
            <strong>GITHUB</strong>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </LinkGithub>
        </NameProfile>
        <p>{profile.bio}</p>
        <SocialMediaProfile>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <strong>{profile.login}</strong>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <strong>rocketseat</strong>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <strong>{profile.followers}</strong>
          </div>      
        </SocialMediaProfile>
      </InfoContent>
    </ProfileContainer>
  )
}