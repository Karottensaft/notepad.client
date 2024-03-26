import { memo } from 'react'
import styles from './MainPage.module.scss'
import { MainLayout } from '../../layouts/main/MainLayout.tsx'

export const MainPage = memo(() => (
    <MainLayout sidebarData={[{title: 'Sidebar item 1', onClick: () => console.log('1')}, {title: 'Sidebar item 2', onClick: () => console.log('2')}]}>
        <div className={styles.mainPage}>
            {'dsadasdasdas'}
        </div>
    </MainLayout>
))