import { Title, Container } from "./styles"


function Home() {
  return (
    <Container>
      <TopBackground>
        <img />
      </TopBackground>


      <Form>
        <Title>Cadastro de Usuarios</Title>
        <ContainerInputs>

          <div>
            <div>
              <InputLabel>
                Nome <span>*</span>
              </InputLabel>

              <Input type='text' placeholder='Nome do Usuário' />
            </div>


            <div>
              <InputLabel>
                Idade <span>*</span>
              </InputLabel>

              <Input type='number' placeholder='Idade do Usuário' />
            </div>


            <div>
              <InputLabel>
                E-mail <span>*</span>
              </InputLabel>

              <Input type='email' placeholder='E-mail do Usuário' />
            </div>
           
          </div>
          <Input type='email' placeholder='E-mail do Usuário' />
        </ContainerInputs>
        <Button>Cadastrar Usuarios </Button>
      </Form>
    </Container>
  )
}

export default Home 