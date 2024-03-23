import styles from './BasePage.module.scss'
import { FC, PropsWithChildren } from 'react'
import { AppHeader } from '../../widgets/header/AppHeader.tsx'

export const BasePage: FC<PropsWithChildren> = ({
    children
}) => (
    <div className={styles.basePage}>
        <AppHeader
            title={'Notepad'}
        />
        {children}
    </div>
)
