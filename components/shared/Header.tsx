import { useState } from "react";
import styled from "styled-components";
import AuthModal from "./AuthModal.tsx";

const HeaderBar = styled.div`
  border-bottom: 5px ${({theme}) => theme.colors.primary} solid;
  border-top: 5px ${({theme}) => theme.colors.primary} solid;
  color: ${({theme}) => theme.colors.primary};
  font-size: 24px;
	display: flex;
	padding: 15px;
  justify-content: space-between;
	align-items: center;
`

const LogoText = styled.div`
  font-family: 'Moon Dance', cursive;
  font-size: 54px;
  margin-left: 20px;
	display: inline-block;
`

const AuthNav = styled.div`
	
`

const SignIn = styled.div`
	margin-right: 30px;
	cursor: pointer;
`

export default function Header(){
	const [modal, setModal] = useState(false);
  return(
    <HeaderBar>
			{modal && 
			  <AuthModal></AuthModal>
			}
      <LogoText>toDo It!</LogoText>
			<AuthNav>
				<SignIn onClick={() => setModal(true)}>
					Sign In
				</SignIn>
			</AuthNav>
    </HeaderBar>
  )
}