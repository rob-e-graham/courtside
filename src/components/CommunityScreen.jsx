export default function CommunityScreen({ country, onBack }) {
  // Replace this with your actual Discord invite link
  const DISCORD_INVITE = 'https://discord.gg/YOUR_INVITE_HERE'

  const channels = [
    {
      name: 'general-support',
      icon: '💬',
      description: 'Talk to people who understand what you\'re going through'
    },
    {
      name: 'just-been-served',
      icon: '🔴',
      description: 'Just found out? Get immediate support from people who\'ve been there'
    },
    {
      name: 'court-experiences',
      icon: '⚖️',
      description: 'Share and learn from others\' court experiences'
    },
    {
      name: 'legal-tips',
      icon: '📋',
      description: 'Tips and strategies that worked (not legal advice)'
    },
    {
      name: 'self-care',
      icon: '🧠',
      description: 'Looking after your mental health during the process'
    },
    {
      name: 'wins',
      icon: '🎉',
      description: 'Celebrate progress, big or small'
    },
    {
      name: 'local-' + (country?.code?.toLowerCase() || 'general'),
      icon: country?.flag || '🌍',
      description: `Connect with people in ${country?.name || 'Australia'} going through the same system`
    },
    {
      name: 'contribute-guides',
      icon: '✍️',
      description: 'Help improve the Australian family court guide'
    }
  ]

  return (
    <div className="community-screen">
      <button className="back-btn" onClick={onBack}>
        &lsaquo; Back
      </button>

      <h2>Community</h2>
      <p className="community-intro">
        Connect with people who've been through it. Share experiences, ask questions, and support each other. No judgement, no cost.
      </p>

      <a
        href={DISCORD_INVITE}
        target="_blank"
        rel="noopener noreferrer"
        className="discord-join-btn"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="discord-icon">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
        </svg>
        Join the Courtside Community
      </a>

      <div className="channels-preview">
        <h3>Channels you'll find</h3>
        {channels.map((ch, i) => (
          <div key={i} className="channel-card">
            <span className="channel-icon">{ch.icon}</span>
            <div className="channel-info">
              <span className="channel-name">#{ch.name}</span>
              <span className="channel-desc">{ch.description}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="community-rules">
        <h3>Community Guidelines</h3>
        <ul>
          <li>Be respectful — everyone here is going through something difficult</li>
          <li>No legal advice — share experiences, not opinions on someone's case</li>
          <li>Protect privacy — never share identifying details about your ex, children, or case</li>
          <li>No harassment, discrimination, or abuse of any kind</li>
          <li>Support each other — this is a community, not a courtroom</li>
        </ul>
      </div>

      <div className="contribute-section">
        <h3>Help Build Local Guides</h3>
        <p>Been through the Australian family court system? Your experience can help others. Join the <strong>#contribute-guides</strong> channel to help us improve accurate, verified legal information for Australia.</p>
        <p className="contribute-note">All contributed content is reviewed before publishing. We work with legal professionals to verify accuracy.</p>
      </div>
    </div>
  )
}
