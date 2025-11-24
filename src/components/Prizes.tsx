import { useTranslation } from 'react-i18next'
import './Prizes.css'

const Prizes = () => {
  const { t } = useTranslation()

  return (
    <section className="prizes-section">
      <h2 className="prizes-title">{t('prizes.title')}</h2>

      <div className="prize-category">
        <div className="prize-image">
          <div className="image-placeholder pool-table">
            <div className="prize-icon-large">🎱</div>
            <div className="prize-glow"></div>
          </div>
        </div>
        <div className="prize-content">
          <div className="prize-badge">Monthly</div>
          <h3 className="prize-category-title">
            {t('prizes.monthly.title')}
          </h3>
          <div className="prize-rank">{t('prizes.monthly.top1')}</div>
          <p className="prize-description">
            {t('prizes.monthly.description')}
          </p>
        </div>
      </div>

      <div className="prize-category">
        <div className="prize-image">
          <div className="image-placeholder fridge">
            <div className="prize-icon-large">🧊</div>
            <div className="prize-glow"></div>
          </div>
        </div>
        <div className="prize-content">
          <div className="prize-badge">Milestone</div>
          <h3 className="prize-category-title">
            {t('prizes.milestone.title')}
          </h3>
          <div className="prize-rank">{t('prizes.milestone.first5')}</div>
          <p className="prize-description">
            {t('prizes.milestone.description')}
          </p>
        </div>
      </div>

      <div className="prize-category">
        <div className="prize-image">
          <div className="image-placeholder thailand">
            <div className="prize-icon-large">🏝️</div>
            <div className="prize-glow"></div>
          </div>
        </div>
        <div className="prize-content">
          <div className="prize-badge">Grand Finale</div>
          <h3 className="prize-category-title">
            {t('prizes.grandFinale.title')}
          </h3>
          <div className="prize-finale-list">
            <div className="prize-finale-item">
              <div className="finale-rank-badge rank-1">
                <span className="finale-medal">🥇</span>
                <span className="finale-rank-text">{t('prizes.grandFinale.top1')}</span>
              </div>
              <p className="prize-description">
                {t('prizes.grandFinale.top1Desc')}
              </p>
            </div>
            <div className="prize-finale-item">
              <div className="finale-rank-badge rank-2">
                <span className="finale-medal">🥈</span>
                <span className="finale-rank-text">{t('prizes.grandFinale.top2')}</span>
              </div>
              <p className="prize-description">
                {t('prizes.grandFinale.top2Desc')}
              </p>
            </div>
            <div className="prize-finale-item">
              <div className="finale-rank-badge rank-3">
                <span className="finale-medal">🥉</span>
                <span className="finale-rank-text">{t('prizes.grandFinale.top3')}</span>
              </div>
              <p className="prize-description">
                {t('prizes.grandFinale.top3Desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prizes

