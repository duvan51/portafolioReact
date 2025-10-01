import React from 'react';
import './habilitiesBlands.css';
import Logo from '../logo/Logo';
import Redes from '../redes/redes'
import { useTheme } from "styled-components";

const HabilitiesBlands = () => {
     const theme = useTheme();




  return (
    <div className="habilitiesBlands"  style={{ backgroundColor: theme.backgroundPrimary, color: theme.colorPrimary }}>
        <Logo />

        <Redes />
    </div>
  )
}

export default HabilitiesBlands