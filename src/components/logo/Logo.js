import React from 'react'
import './logo.css'
import { useTheme } from "styled-components";

const Logo = () => {
  const theme = useTheme();
  return (
    <div className="nameLog">
                    <div className="name">
                        <div>D</div>
                        <div>v</div>
                        <div>N</div>
                        <div></div>
                        <div>A</div>     
                    </div>
    </div>
  )
}

export default Logo