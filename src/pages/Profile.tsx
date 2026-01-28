// eslint-disable react-hook/exhaustive-deps 
import { useContext, useEffect, useState, type ChangeEvent } from "react"
import Cookies from 'js-cookie'

// COMPONENTS
import { CardComponent, FormComponent,Header, StyledH2, StyledButton } from "@/components"
import { AppThemeContext } from "@/contexts/AppThemeContext"

//HOOK
import { useFormValidation, useGet, usePut, useDelete } from "@/hooks"

//MUI
import { Container, Grid } from "@mui/material"

// SERVICES
import { logout } from "@/services"

//TYPES
import type { InputProps, ProfileData, ProfileEditableData, MessageProps } from "@/types"


function Profile() {
  const themeContext = useContext(AppThemeContext)

  //HOOK
  const [updateMessage, setUptadeMessage] = useState<MessageProps>({
    type: 'success',
    msg: ''
  })

  const clearMessage = () => {
    setTimeout(() => {
      setUptadeMessage({
        type: 'success',
        msg: ''
      })
    }, 3000)
  }
  
  const { 
    data: profileData, 
    loading: profileloading, 
    error: profileError, 
  } = useGet<ProfileData>('profile')

  const { 
    data: profileUptadeData,
    putData: profilePutData, 
    loading: profileUptadeloading, 
    error: profileUptadeError, 
  } = usePut<ProfileEditableData>('profile/update')

  const { deleteData: profileDeleteData, loading: profileDeleteLoading } = useDelete()

  useEffect(() => {
    if (profileData){
      handleChange(0, profileData.name)
      handleChange(1, profileData.email)
      handleChange(2, profileData.phone)
    }
  }, [profileData])

  //FORM
  const inputs: InputProps[] = [
    {name: 'name', type: 'text', placeholder: 'Nome', required: true},
    {name: 'email', type: 'email', placeholder: 'Email', disabled: true},
    {name: 'phone', type: 'tel', placeholder: 'Telefone', required: true},
  ]

  const { formValues, formValid, handleChange} = useFormValidation(inputs)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await profilePutData(
      {
        name: String(formValues[0]),
        phone: String(formValues[2])
      }
    )
  }
  const handleDelete = async () =>{
    if(confirm('Tem certeza que deseja excluir sua conta? Se sim, certifique-se de deletar os seus leads antes')){
      try {
        await profileDeleteData('/api/profile/delete')
        alert('Perfil deletado com sucesso!')
        Cookies.remove('Authorization')
        window.location.href = '/'
      } catch (e) {
        alert('Não foi possivél realizar a operação. Entre em contato com nosso suporte.')
      }
    }
  }

  useEffect(() => {
    if (profileUptadeData !== null){
      setUptadeMessage({
        msg:'Perfil Atualizado com sucesso',
        type: 'success'
      })
    } else if (profileUptadeError){
        setUptadeMessage({
        msg:'Não foi possível realizar a operação. Entre em contato com nosso suporte',
        type: 'error'
      })
    }
    clearMessage() 
  }, [profileUptadeData, profileUptadeError])
  

  return (
    <>
    <Header />
    <Container className="mb-2" maxWidth="lg">
      <Grid container spacing={4}>
        <Grid container size={{xs:12, sm:6}}>
          {!profileError && (
           <CardComponent 
              className={profileloading! 
              ? 'skeleton-loading skeleton-loading-mh-2'
              : ''}
            >
              {
                !profileloading && profileData && (
                  <>
                   <StyledH2 className="mb-1">Seus Dados</StyledH2>
                    <FormComponent 
                    inputs ={inputs.map((input, index) => ({
                        ...input,
                        type: input.type,
                        placeholder: input.placeholder,
                        value: formValues[index] || '',
                        onChange: (e: ChangeEvent<HTMLInputElement>) => 
                        handleChange(index, (e.target as HTMLInputElement).value)
                    }))}
                      buttons={
                        [
                          {
                            className: 'primary',
                            id:'update-profile',
                            disabled: !formValid || profileUptadeloading,
                            type: 'submit', 
                            onClick: handleSubmit,
                            children: profileUptadeloading ? 'Aguarde..' : 'Atualizar meu perfil',
                          },
                          {
                            className: 'alert',
                            id:'delete-profile', 
                            disabled: profileDeleteLoading,
                            type: 'button', 
                            onClick: handleDelete,
                            children: profileDeleteLoading ? 'Aguarde...' : 'Excluir minha conta'
                          },
                        ] 
                      }
                      message={updateMessage}
              />
                  </>
                )
              }
              
            </CardComponent>
            )
          }
        </Grid>

        <Grid container size={{xs:12, sm:6}}>
            <CardComponent>
              <StyledH2 className="mb-1">Definições de conta</StyledH2>
              <StyledButton 
                className="primary mb-1"
                id="theme-switch"
                onClick={themeContext?.toggleTheme}>
                  Trocar para tema {' '}
                  {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
              </StyledButton>
              <StyledButton className="alert" id="logout" onClick={logout}> Logout</StyledButton>
            </CardComponent>
        </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default Profile
