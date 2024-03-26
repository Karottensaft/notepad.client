import styles from './Sidebar.module.scss'
import { memo } from 'react'
import { SidebarItemData } from '../../entities/sidebar/SidebarItemData.tsx'
import { Item } from './item/Item.tsx'

type Props = {
    data: SidebarItemData[]
    title: string
}

export const Sidebar = memo<Props>(({
    data,
    title
}) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.title}>
                {title}
            </div>
            {data.map(d => (
                    <Item
                        key={d.title}
                        data={d}
                    />
                )
            )}
        </div>
    )
})