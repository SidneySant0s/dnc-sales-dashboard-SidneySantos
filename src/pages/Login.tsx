import { Grid, Container, Box} from '@mui/material';
import { BannerImage, FormComponent, Logo, StyledH1, StyledP} from '@/components';
import { pxToRem } from '@/utils';


function Login() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid container sx={{flexGrow: 1, size:{xs:2, sm:6 }, height: '100vh', display: "flex", alignItems: 'center'}}>
            
            <Container maxWidth="sm">
              <Box sx={{marginBottom: pxToRem(24)}}><Logo height={41} width={100}/></Box>
              <Box sx={{marginBottom: pxToRem(24)}}>
                <StyledH1>Bem-Vindo</StyledH1>
                <StyledP>Digite sua senha e email para logar</StyledP>
              </Box>

              <FormComponent inputs ={[
                { type: 'email', placeholder: 'Email'},
                { type: 'password', placeholder: 'Senha'}
              ]}
              buttons={[
                {className: 'primary', type: 'submit', children: 'Login' },
              ]}
              message={{
                msg: 'Sucesso!!',
                type:'success'
              }}
              />
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
