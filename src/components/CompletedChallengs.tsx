import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContexts'
import Styles from '../styles/components/CompletedChallengs.module.css'

export default function CompletedChallengs(){
    const { challengesCompleted, isDark} = useContext(ChallengesContext)
    
    return(
        <div className={isDark ? `${Styles.CompletedChallengsContainer} ${Styles.darkTheme}` : `${Styles.CompletedChallengsContainer}`}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}