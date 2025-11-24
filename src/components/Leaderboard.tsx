import { useTranslation } from 'react-i18next'
import './Leaderboard.css'

interface LeaderboardEntry {
  rank: number
  name: string
  location: string
  xp: number
  logo?: string
  icon?: string
}

const Leaderboard = () => {
  const { t } = useTranslation()

  const entries: LeaderboardEntry[] = [
    { rank: 1, name: 'Trisara', location: 'Lazimpath', xp: 420, icon: '🍜' },
    { rank: 2, name: 'World Of Wings', location: 'Lazimpat', xp: 320, icon: '🍗' },
    { rank: 3, name: 'Bajeko Sekuwa', location: 'Lainchaur', xp: 220, icon: '🥩' },
    { rank: 4, name: 'Jimbu Thakali', location: 'Jhamsikhel', xp: 200, icon: '🍛' },
    { rank: 5, name: 'Alice Restaurant', location: 'Durbarmarg', xp: 120, icon: '🍽️' },
    { rank: 6, name: 'Roadhouse Pizza', location: 'Thamel', xp: 10, icon: '🍕' },
  ]

  const getRankIcon = (rank: number) => {
    if (rank === 1) return '🥇'
    if (rank === 2) return '🥈'
    if (rank === 3) return '🥉'
    return null
  }

  const getRankClass = (rank: number) => {
    if (rank === 1) return 'rank-first'
    if (rank === 2) return 'rank-second'
    if (rank === 3) return 'rank-third'
    return 'rank-other'
  }

  return (
    <section className="leaderboard-section">
      <div className="leaderboard-header">
        <h2 className="section-title">{t('leaderboard.title')}</h2>
        <div className="leaderboard-subtitle">Top Performing Restaurants</div>
      </div>
      
      {/* Podium for Top 3 */}
      <div className="podium-container">
        {entries.slice(0, 3).map((entry, index) => {
          const isFirst = entry.rank === 1
          const isSecond = entry.rank === 2
          const isThird = entry.rank === 3
          
          return (
            <div key={entry.rank} className={`podium-item ${getRankClass(entry.rank)}`}>
              <div className="podium-rank-badge">
                <span className="rank-medal">{getRankIcon(entry.rank)}</span>
                <span className="rank-number">#{entry.rank}</span>
              </div>
              <div className="podium-logo">
                <div className="logo-circle">
                  <span className="logo-icon">{entry.icon}</span>
                </div>
                {isFirst && <div className="crown">👑</div>}
              </div>
              <div className="podium-info">
                <div className="podium-name">{entry.name}</div>
                <div className="podium-location">{entry.location}</div>
                <div className="podium-xp">
                  <span className="xp-value">{entry.xp}</span>
                  <span className="xp-label">{t('leaderboard.xp')}</span>
                </div>
              </div>
              <div className={`podium-base ${isFirst ? 'base-first' : isSecond ? 'base-second' : 'base-third'}`}>
                <div className="base-shine"></div>
              </div>
            </div>
          )
        })}
      </div>

      {/* List for remaining entries */}
      <div className="leaderboard-list">
        {entries.slice(3).map((entry) => (
          <div key={entry.rank} className="leaderboard-entry">
            <div className="entry-rank-badge">
              <span className="rank-number">#{entry.rank}</span>
            </div>
            <div className="entry-logo-wrapper">
              <div className="entry-logo">
                <span className="logo-icon">{entry.icon}</span>
              </div>
            </div>
            <div className="entry-info">
              <div className="entry-name">{entry.name}</div>
              <div className="entry-location">
                <span className="location-icon">📍</span>
                {entry.location}
              </div>
            </div>
            <div className="entry-xp-badge">
              <div className="xp-icon">⭐</div>
              <div className="xp-content">
                <span className="xp-value">{entry.xp}</span>
                <span className="xp-label">{t('leaderboard.xp')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Leaderboard
