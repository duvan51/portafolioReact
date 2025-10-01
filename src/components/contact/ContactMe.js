import React from 'react'
import servicesDataInfo from '../servicesTabs/servicesDataInfo'
import { useTranslation } from 'react-i18next'
import { useTheme } from "styled-components";

const ContactMe = () => {
  const { t } = useTranslation()
  const theme = useTheme();

  return (
    <section 
  className="py-5 border-top" 
  id="cont" 
  style={{ backgroundColor: theme.backgroundPrimary }}
>
  <div className="container">

    {/* Description */}
    <div className="text-center mb-4">
      <h2 className="fw-bold">{t('contactMe.contactTitle')}</h2>
      <h4 className="text-secondary">{t('contactMe.contactTitle2')}</h4>
      <p className="text-muted">{t('contactMe.contactDescription')}</p>
    </div>

    {/* Contact Info */}
    <div className="row gy-4 justify-content-center text-center">

      {/* Location */}
      <div className="col-12 col-sm-6 col-md-4">
        <div className="d-flex flex-column align-items-center">
          <i className="fi fi-sr-marker fs-2 mb-2 text-primary"></i>
          <h6 className="fw-bold">{t('contactMe.contactMenuLocate')}</h6>
          <p className="mb-0">{servicesDataInfo.country}, {servicesDataInfo.city}</p>
        </div>
      </div>

      {/* Phone */}
      <div className="col-12 col-sm-6 col-md-4">
        <div className="d-flex flex-column align-items-center">
          <i className="fi fi-sr-phone-call fs-2 mb-2 text-success"></i>
          <h6 className="fw-bold">{t('contactMe.contactMenuNumber')}</h6>
          <p className="mb-0">{servicesDataInfo.telephone}</p>
        </div>
      </div>

      {/* Email */}
      <div className="col-12 col-sm-6 col-md-4">
        <div className="d-flex flex-column align-items-center">
          <i className="fi fi-sr-envelope fs-2 mb-2 text-danger"></i>
          <h6 className="fw-bold">{t('contactMe.contactMenuEmail')}</h6>
          <p className="mb-0">{servicesDataInfo.email}</p>
        </div>
      </div>

    </div>
  </div>
</section>

  )
}

export default ContactMe
