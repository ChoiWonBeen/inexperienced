import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";

const WinrateWrapper = styled.div`
  
`

const Card = styled.div`
  border-radius: 6px;
  width: 100%;
  height: 100%;
`

export default function Winrate(){
  useEffect(() => {
    async function getUserData(){
      return await axios.get('https://to-do-it-backend-ciiqx.run.goorm.io/users').then((res) => {
        console.log(res)
      })
    }
    getUserData()
  })
  return (
    <WinrateWrapper>
      <Card>
			
			</Card>
    </WinrateWrapper>
  )
}