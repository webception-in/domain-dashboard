import React from 'react'

const Domain = ({url,className,dates}) => {
	console.log('TCL: Domain -> url', url)
	console.log('TCL: Domain -> dates', dates)
  
  return (
    <li>
        {url}
        
    </li>
  )
}

export default Domain;