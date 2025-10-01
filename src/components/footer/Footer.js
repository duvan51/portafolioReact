import React from 'react'
import './footer.css'
import servicesDataInfo from '../servicesTabs/servicesDataInfo'
import { useTheme } from "styled-components";

const Footer = () => {
  const theme = useTheme();
  
  return (
    <div className="footer" id="footer" style={{ backgroundColor: theme.backgroundPrimary, color: theme.colorPrimary }}>
        Copyright © 2021 {servicesDataInfo.first_name} All Rights Reserved by ThemeBing.
    </div>
  )
}

export default Footer