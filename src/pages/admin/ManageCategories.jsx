import React from 'react'
import { useTheme } from "styled-components";

const ManageCategories = () => {
  const theme = useTheme();

  
  return (
    <div
    className="container-fluid py-5"
      style={{ backgroundColor: theme.backgroundSecondary , color: theme.colorPrimary }}
    
    >ManageProject</div>
  )
}

export default ManageCategories 