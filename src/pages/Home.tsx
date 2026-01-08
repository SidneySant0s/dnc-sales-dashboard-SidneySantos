//COMPONENTS
import {
  AvatarsList,
  CardComponent,
  CustomChart,
  CustomTable,
  Header,
  StyledH2,
  StyledH3,
  StyledSpan,
} from '@/components'

import { Container, Grid } from '@mui/material'

//HOOKS
import { useGet } from '@/hooks'

//UTILS
import { currencyConverter, highlightTextConverter } from '@/utils'

//TYPES
import type { HighlightsData, StarsData, NewsData, CustomChartProps } from '@/types'

function Home() {
  const { 
    data: highlightsData, 
    loading: highlightsloading, 
    error: highlightsError, 
  } = useGet<HighlightsData[]>('sales/highlights')

  const firstHighlight = highlightsData?.[0];
  const secondHighlight = highlightsData?.[1];
  const threeHighlight = highlightsData?.[2];

  const { 
    data: salesMonthData, 
    loading: salesMonthloading, 
    error: salesMonthError, 
  } = useGet<CustomChartProps>('sales/Month')

    const { 
    data: salesStarsData, 
    loading: salesStarsloading, 
    error: salesStarsError, 
  } = useGet<StarsData[]>('sales/stars')

  

    const { 
    data: newsData, 
    loading: newsloading, 
    error: newsError, 
  } = useGet<NewsData[]>('news')

    const { 
    data: salesYearData, 
    loading: salesYearloading, 
    error: salesYearError, 
  } = useGet<CustomChartProps>('sales/year')

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          {!highlightsError && (
              <>
                <Grid container size={{ xs: 12, md: 4 }}>
                  <CardComponent 
                  className={highlightsloading! ? 'skeleton-loading skeleton-loading-mh-1': ''}>
                    {
                      !highlightsloading && firstHighlight &&(
                      <>
                        <StyledH2 className="mb-1">
                          Total de vendas no mês
                        </StyledH2>
                              <StyledH3 className="mb-1" size={40} lineheight={40}>{currencyConverter(firstHighlight.value)}</StyledH3>
                              <StyledSpan>{firstHighlight.subtitle}</StyledSpan>
                      </>)
                    }
                  </CardComponent>
                </Grid>

                <Grid container size={{ xs: 12, md: 4 }}>
                  <CardComponent className={
                    secondHighlight?.subtitle ?? 'skeleton-loading skeleton-loading-mh-1'
                  }>
                    {
                      !highlightsloading && secondHighlight &&(
                      <>
                      <StyledH2 className="mb-1" color='white'>
                        Meta do mês
                        </StyledH2>
                        <StyledH3 
                          className="mb-1" 
                          color='white' 
                          size={40} 
                          lineheight={40}
                        >
                            {currencyConverter(secondHighlight.value)}
                          </StyledH3>
                        <StyledSpan color='white'>
                          {highlightTextConverter(secondHighlight.subtitle)}
                          </StyledSpan>
                      </>)
                    }
                  </CardComponent>
                </Grid>

                <Grid container size={{ xs: 12, md: 4 }}>
                  <CardComponent className={highlightsloading! ? 'skeleton-loading skeleton-loading-mh-1': ''}>
                    
                    {
                      !highlightsloading && threeHighlight &&(
                      <>
                        <StyledH2 className="mb-1">Leads contactado</StyledH2>
                          <StyledH3 className="mb-1" size={40} lineheight={40}>{currencyConverter(threeHighlight.value)}</StyledH3>
                          <StyledSpan>{(threeHighlight.subtitle)}</StyledSpan>
                      </>)
                    }
                  </CardComponent>
                </Grid>
              </>
            )
          }
          <Grid container size={{ xs: 12, md: 7 }}>
            {
              !salesMonthError && (
              <CardComponent className={salesMonthloading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
                {
                  !salesMonthloading && salesMonthData &&(
                  <>
                    <StyledH2 className="mb-1">Valor de vendas do mês</StyledH2>
                      <CustomChart
                        labels={salesMonthData.labels.map((label) =>label)}
                        data={salesMonthData.data.map((data) =>data)}
                        type={salesMonthData.type}
                      />
                  </>
                  )
                }
            </CardComponent>
              )
            }
          </Grid>

          <Grid container size={{ xs: 12, md: 5 }}>
              {
                !salesStarsError && (
                <CardComponent className={salesMonthloading ? 'skeleton-loading skeleton-loading-mh-2' : '' }>
                  {
                    !salesStarsloading && salesMonthData && (
                      <>
                        <StyledH2 className="mb-1">
                          Maiores vendedores do mês
                        </StyledH2>
                        <AvatarsList 
                        listData={
                          salesStarsData ? salesStarsData.map((star) => ({
                            avatar: '/dnc-avatar.svg',
                            name: star.name,
                            subtitle: currencyConverter(star.value)
                          })) 
                          : []
                         }
                        />
                      </>
                    )
                  }
                </CardComponent>
                )
              }
          </Grid>
          
          <Grid container size={{ xs: 12, md: 5 }}>
            
            {
              !newsError && (
                  <CardComponent 
                  className={newsloading ? 'skeleton-loading skeleton-loading-mh-2' : '' }>
                    {
                      !newsloading && newsData &&(
                        <>
                          <StyledH2 className="mb-1">Notícias relevantes</StyledH2>
                          <CustomTable
                              headers={['Titulo', 'Horário']}
                              rows={newsData.map((news) => [
                                <a className='ellipsis-sm' href={news.link} target='_blank'>
                                  {news.title}
                                </a>,
                                <a href={news.link} target='_blank'>
                                  {news.date}
                                </a>
                              ])}
                          />
                        </>

                      )
                    }
                  </CardComponent>
                )
            }
          </Grid>

          <Grid container size={{ xs: 12, md: 7 }}>
            {
              !salesYearError && (
              <CardComponent className={salesYearloading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
                {
                  !salesYearloading && salesYearData &&(
                  <>
                    <StyledH2 className="mb-1">Valor de vendas por mês</StyledH2>
                      <CustomChart
                        labels={salesYearData.labels.map((label) =>label)}
                        data={salesYearData.data.map((data) =>data)}
                        type={salesYearData.type}
                      />
                  </>
                  )
                }
            </CardComponent>
              )
            }
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
