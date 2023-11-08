const TenantLogou = () => {
    
    localStorage.removeItem('tenantLoginStatus')
    window.location.href='/tenant-login';
  return (
    <div></div>
  )
}

export default TenantLogou
