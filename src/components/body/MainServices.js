import React from 'react'
import ServicesTabs from '../servicesTabs/ServicesTabs'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useTheme } from "styled-components";


const SectionWrapper = styled.section`
  padding: 4rem 0;
`

const Divider = styled.hr`
  width: 80px;
  margin: 1.5rem auto;
`

const MainServices = () => {
  const { t } = useTranslation()
  const theme = useTheme();

  return (
    <SectionWrapper id="services">
      <div className="container text-center">
        <h3 className="fw-semibold mb-3" style={{ color: theme.colorPrimary }}>{t('mainServices.mainServiceTitle')}</h3>
        <p className="" style={{ color: theme.colorPrimary }}>{t('mainServices.mainServiceDescription')}</p>
        <Divider style={{ borderTop: theme.colorSecondary }}  />
      </div>

      <div className="container">
        <ServicesTabs />
      </div>
    </SectionWrapper>
  )
}

export default MainServices
