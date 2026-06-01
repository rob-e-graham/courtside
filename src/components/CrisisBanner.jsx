export default function CrisisBanner({ country, services }) {
  // Find a crisis number for this country
  const crisisService = services?.crisis?.[0]

  if (!crisisService) {
    return (
      <div className="crisis-banner">
        <span>In crisis?</span>
        <a href="https://www.iasp.info/resources/Crisis_Centres/" target="_blank" rel="noopener noreferrer" className="crisis-link">
          Find help in your country
        </a>
      </div>
    )
  }

  const href = `tel:${crisisService.phone.replace(/\s/g, '')}`

  return (
    <div className="crisis-banner">
      <span>In crisis?</span>
      <a href={href} className="crisis-link">
        Call {crisisService.name}: {crisisService.phone}
      </a>
    </div>
  )
}
