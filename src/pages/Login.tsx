import { Grid, Container, Box} from '@mui/material';
import { BannerImage } from '@/components';


function Login() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid container sx={{flexGrow: 1, size:{xs:2, sm:6 }, height: '100vh', display: "flex", alignItems: 'center'}}>
            <Container maxWidth="sm">
              <h1>LOGIN</h1>
            </Container>
          </Grid>

          <Grid container sx={ { size:{sm:6},display:{xs: 'none', sm:'block'}}}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
