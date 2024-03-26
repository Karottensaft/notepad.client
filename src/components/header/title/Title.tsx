import { memo } from 'react'
import styles from './Title.module.scss'

type Props = {
    text: string
}

export const Title = memo<Props>(({
    text
}) => {
    return (
        <div className={styles.headerTitle}>
            {text}
        </div>
    )
})