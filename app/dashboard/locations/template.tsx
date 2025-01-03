import React from 'react'
import AddLocationButton from './_components/add-location-button'

function LocationTemplate({children}: {children: React.ReactNode}) {
  return (
    <div>
      <AddLocationButton />
      {children}
      </div>
  )
}

export default LocationTemplate