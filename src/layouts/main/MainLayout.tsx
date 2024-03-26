import styles from './MainLayout.module.scss'
import { FC, PropsWithChildren } from 'react'
import { SidebarItemData } from '../../entities/sidebar/SidebarItemData.tsx'
import { Sidebar } from '../../components/sidebar/Sidebar.tsx'
import { Header } from '../../components/header/Header.tsx'

type Props = {
    sidebarData: SidebarItemData[]
}

export const MainLayout: FC<PropsWithChildren<Props>> = ({
    children,
    sidebarData
}) => (
    <div className={styles.layout}>
        <Header
            title={'Header title'}
        />
        <div className={styles.block}>
            <Sidebar data={sidebarData} title={'Sidebar'}/>
            {children}
        </div>
    </div>
)
