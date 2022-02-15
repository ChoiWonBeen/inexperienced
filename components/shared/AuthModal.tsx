import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
	top:0;
	left:0;
	width: 100%;
	height: 100%;
	background-color: #0000006e;
	${({ theme }) => theme.mixins.flexCenterMixin};
`

const LogoText = styled.div`
  font-family: 'Moon Dance', cursive;
  font-size: 3rem;
  padding: 15px;
  margin-left: 20px;
`

const ModalWrapper = styled.div`
	width: 40%;
	height: 60%;
	background-color: white;
	border-radius: 30px;
`

export default function AuthModal({setModal}){
  return(
		<ModalBackground onClick={() => setModal(false)}>
			<ModalWrapper>
			
			</ModalWrapper>
		</ModalBackground>
  )
}