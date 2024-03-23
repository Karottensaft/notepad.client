import styles from './BasePage.module.scss'
import { FC, PropsWithChildren } from 'react'

export const BasePage: FC<PropsWithChildren> = ({
    children
}) => (
    <div className={styles.basePage}>
        {children}
    </div>
)
