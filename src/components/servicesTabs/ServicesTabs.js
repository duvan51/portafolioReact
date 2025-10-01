import React, { useEffect, useState } from 'react'
import info from './servicesData'
import styled from 'styled-components'
import { useTheme } from "styled-components";

const CardHover = styled.div`
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  }
`

const ServicesTabs = () => {
  const [datos, setDatos] = useState([])
   const theme = useTheme();

  useEffect(() => {
    if (info) {
      setDatos(info)
    }
  }, [])

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {datos.map((i) => (
        <div className="col" key={i.id}  >
          <CardHover className="card h-100 text-center border-0 shadow-sm" 
            style={{ backgroundColor: theme.colorPrimaryTransparent }}
          >
            <div className="card-body">
              <div className="fs-1 mb-3" style={{ color: theme.colorSecondary }} >{i.icon}</div>
              <h5 className="card-title fw-bold" style={{ color: theme.colorPrimary }}>{i.name}</h5>
              <p className="card-text" style={{ color: theme.colorPrimary }}>{i.description}</p>
            </div>
          </CardHover>
        </div>
      ))}
    </div>
  )
}

export default ServicesTabs