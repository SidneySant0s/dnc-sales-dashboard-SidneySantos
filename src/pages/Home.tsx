import { AvatarsList, CardComponent, CustomTable, Header } from "@/components"
import { Container } from "@mui/material"
import { currencyConverter } from "@/utils"

function Home() {
  const mockListData = [
    {
      avatar:'/helena.svg',
      name: 'Helena',
      subtitle: currencyConverter(12120.05),
    },
    {
      avatar:'/Oscar.svg',
      name: 'Oscar',
      subtitle: currencyConverter(11450.09),
    },
    {
      avatar:'/daniel.svg',
      name: 'Daniel',
      subtitle: currencyConverter(10893.19),
    },
    {
      avatar:'/djay.svg',
      name: 'Daniel Jay Park',
      subtitle: currencyConverter(9925.49),
    },
    {
      avatar:'/mark.svg',
      name: 'Mark Rojas',
      subtitle: currencyConverter(8245.89),
    }
  ]

  const mockTableData = {
    headers: ['Name','Email','Actions'],
    rows: [
      [
        <span>Nome 1</span>,
        <span>nome1@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 2</span>,
        <span>nome2@email.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Nome 3</span>,
        <span>nome3@email.com</span>,
        <button>ACTION</button>,
      ]
    ]
  }
  return (
    <>
    <Header />
    <Container maxWidth = "lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData}/>
        </CardComponent>
        <CardComponent>
          <CustomTable headers={mockTableData.headers} rows={mockTableData.rows}/>
        </CardComponent>
    </Container>
    </>
  )
}

export default Home
