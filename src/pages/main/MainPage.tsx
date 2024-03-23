import { memo } from 'react'
import styles from './MainPage.module.scss'
import { BasePage } from '../base/BasePage.tsx'

export const MainPage = memo(() => (
    <BasePage>
        <div className={styles.mainPage}>

        </div>
    </BasePage>
))