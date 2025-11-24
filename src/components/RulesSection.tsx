import { useTranslation } from 'react-i18next'
import './RulesSection.css'

const RulesSection = () => {
  const { t } = useTranslation()

  const rules = t('rules.items', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>

  return (
    <section className="rules-section">
      <h2 className="section-title">{t('rules.title')}</h2>
      <div className="rules-list">
        {rules.map((rule, index) => (
          <div key={index} className="rule-item">
            <div className="rule-icon">→</div>
            <div className="rule-content">
              <h3 className="rule-title">{rule.title}</h3>
              <p className="rule-description">{rule.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RulesSection

