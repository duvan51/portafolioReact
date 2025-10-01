import './mainOne.css';
import servicesDataInfo from '../servicesTabs/servicesDataInfo';
import Redes from '../redes/redes.js';
import image from '../images/pef.png';

import { useTranslation } from 'react-i18next';
import { useTheme } from "styled-components";



const MainOne = () => {
  const { t } = useTranslation();
  const nameUser = localStorage.getItem('user');
     const theme = useTheme();



  return (
    <section id="mainone" className="py-5  w-100" 
      style={{ backgroundColor: theme.background }}>
      <div className="container">
        <div className="row align-items-center" >

          {/* Text & Socials */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold text-primary">
              {servicesDataInfo.first_name} {servicesDataInfo.last_name}
            </h1>

            <div className="mb-3">
              <Redes />
            </div>

            <p className="lead text-muted"
                style={{ color: theme.colorPrimary }}
            >
              {t('mainOne.mainOneWelcome')} {nameUser}
            </p>

            <h2 className="h4 fw-semibold"
                style={{ color: theme.colorPrimary }}
            >
              {t('mainOne.mainOneName')} {servicesDataInfo.first_name} {servicesDataInfo.last_name}
            </h2>

            <p style={{ color: theme.colorPrimary }}>{t('mainOne.mainOneDescription')}</p>

            <div className="d-flex gap-3 mt-4 flex-wrap">
              <button className="btn btn-primary">
                {t('mainOne.mainOneButtonMyPortafolio')}
              </button>
              <button className="btn btn-outline-primary">
                {t('mainOne.mainOneButtonMyVideos')}
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="col-lg-5 text-center">
            <img
              src={image}
              alt="Profile"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: '300px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainOne;