import logo from '../../assets/Logo.svg'
import { HeaderContainer, LogoImg } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <LogoImg src={logo} alt='' />
    </HeaderContainer>
  )
}