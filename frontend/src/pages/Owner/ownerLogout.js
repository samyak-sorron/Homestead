import React from 'react'

const OwnerLogout = () => {
    localStorage.removeItem('ownerLoginStatus')
    window.location.href='/owner-login';
  return (
    <div></div>
  )
}

export default OwnerLogout