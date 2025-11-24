import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import RulesSection from './components/RulesSection'
import Leaderboard from './components/Leaderboard'
import Statistics from './components/Statistics'
import Prizes from './components/Prizes'
import Footer from './components/Footer'
import LanguageSwitcher from './components/LanguageSwitcher'
import './App.css'

function App() {
  const { t } = useTranslation()

  return (
    <div className="app">
      <LanguageSwitcher />
      <Header />
      <div className="main-content">
        <div className="content-grid">
          <RulesSection />
          <Leaderboard />
        </div>
        <Statistics />
        <Prizes />
      </div>
      <Footer />
    </div>
  )
}

export default App

