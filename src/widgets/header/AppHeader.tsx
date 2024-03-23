import { memo } from 'react'
import styles from './AppHeader.module.scss'

type Props = {
    title: string
}

export const AppHeader = memo<Props>(({
    title
}) => (
    <div className={styles.appHeader}>
        {title}
    </div>
))