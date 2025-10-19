import styled from "styled-components";

const RegistrationArea = styled.div`
    background:#999;
`
const RegistrationImage = styled.div`
    background-image: url(./login-image.svg);
    background-size: cover;
    height: 100vh;
    width: 48.5vw;
`

function Registration() {
  return (
    <>
      <RegistrationArea>Registration</RegistrationArea>
      <RegistrationImage />
    </>
  )
}

export default Registration
