import { useTranslation } from 'react-i18next'
import './Header.css'

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logos">
          <div className="logo-badge logo-gorkha">
            <span className="logo-text">GORKHA</span>
          </div>
          <div className="logo-badge logo-carlsberg">
            <span className="logo-text">CARLSBERG</span>
          </div>
          <div className="logo-separator">×</div>
          <div className="logo-badge logo-khaalisisi">
            <span className="logo-text">KHAALISISI</span>
          </div>
        </div>
      </div>
      <div className="header-banner">
        <div className="banner-pattern"></div>
        <div className="banner-glow"></div>
        <div className="header-content">
          <div className="header-text">
            <div className="title-badge">Champion Program</div>
            <h1 className="header-title">{t('header.title')}</h1>
            <p className="header-subtitle">{t('header.subtitle')}</p>
            <div className="header-stats-preview">
              <div className="stat-preview-item">
                <span className="stat-preview-number">21K+</span>
                <span className="stat-preview-label">Bottles</span>
              </div>
              <div className="stat-preview-divider"></div>
              <div className="stat-preview-item">
                <span className="stat-preview-number">100+</span>
                <span className="stat-preview-label">Restaurants</span>
              </div>
            </div>
          </div>
          <div className="recycling-symbol-container">
            <div className="recycling-symbol">♻</div>
            <div className="symbol-ring"></div>
            <div className="symbol-ring ring-2"></div>
          </div>
        </div>
        <div className="header-bottles">
          <div className="bottle-wrapper">
            <div className="bottle bottle-1">
              <div className="bottle-label">C</div>
              <div className="bottle-cap"></div>
            </div>
            <div className="bottle-shadow"></div>
          </div>
          <div className="bottle-wrapper">
            <div className="bottle bottle-2">
              <div className="bottle-label">G</div>
              <div className="bottle-cap"></div>
            </div>
            <div className="bottle-shadow"></div>
          </div>
          <div className="bottle-wrapper">
            <div className="bottle bottle-3">
              <div className="bottle-label">T</div>
              <div className="bottle-cap"></div>
            </div>
            <div className="bottle-shadow"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

