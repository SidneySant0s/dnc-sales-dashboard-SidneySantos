import { Grid, Container, Box} from '@mui/material';
import { BannerImage, FormComponent, Logo, StyledH1, StyledP, StyledUl } from '@/components';
import { pxToRem } from '@/utils';


function Registration() {
  return (
    <>
       <Box>
              <Grid container>
                <Grid container sx={{flexGrow: 1, size:{xs:2, sm:6 }, height: '100vh', display: "flex", alignItems: 'center'}}>
                  <Container maxWidth="sm">

                    <Box sx={{marginBottom: pxToRem (24)}}><Logo height={41} width={100}/></Box>
                    <Box sx={{marginBottom: pxToRem (24)}}>
                      <StyledH1>Faça seu cadastro</StyledH1>
                      <StyledP>Primeiro, diga-nos quem você é.</StyledP>
                      <StyledUl>
                        <li>Entre 8 e 16 caracteres;</li>
                        <li>Pelo menos uma letra maiúscula;</li>
                        <li>Pelo menos um caractere especial;</li>
                        <li>Pelo menos um número;</li>
                      </StyledUl>
                    </Box>

                    <FormComponent inputs ={[
                      { type: 'email', placeholder: 'Email'},
                      { type: 'password', placeholder: 'Senha'}
                    ]}
                    buttons={[
                      {className: 'primary', type: 'submit', children: 'Login' },
                    ]}
                    message={{
                      msg: 'ERRO!!',
                      type:'error'
                    }}/>
                  </Container>
                </Grid>
      
                <Grid container sx={ { size:{sm:6},display:{xs: 'none', sm:'block'}}}>
                  < BannerImage />
                </Grid>
              </Grid>
            </Box>
    </>
  )
}

export default Registration
