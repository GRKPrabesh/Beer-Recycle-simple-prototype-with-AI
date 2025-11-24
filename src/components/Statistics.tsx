import { useTranslation } from 'react-i18next'
import './Statistics.css'

const Statistics = () => {
  const { t } = useTranslation()

  const stats = [
    {
      icon: '🍾',
      value: '21,340',
      label: t('statistics.totalBottles'),
      gradient: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
    },
    {
      icon: '🍽️',
      value: '100',
      label: t('statistics.participatingRestaurants'),
      gradient: 'linear-gradient(135deg, #ff6f00 0%, #ff8f00 100%)',
    },
    {
      icon: '♻',
      value: '220',
      label: t('statistics.bottlesPerRestaurant'),
      gradient: 'linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)',
    },
  ]

  return (
    <section className="statistics-section">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-icon-wrapper">
            <div className="stat-icon" style={{ background: stat.gradient }}>
              <span className="stat-icon-emoji">{stat.icon}</span>
              <div className="stat-icon-glow"></div>
            </div>
          </div>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </section>
  )
}

export default Statistics

