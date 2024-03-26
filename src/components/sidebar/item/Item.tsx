import styles from './Item.module.scss'
import { SidebarItemData } from '../../../entities/sidebar/SidebarItemData.tsx'
import { memo } from 'react'
import { Button } from '../../../shared/button/Button.tsx'

type Props = {
    data: SidebarItemData
}

export const Item = memo<Props>(({
    data
}) => {
    return (
        <Button
            onClick={data.onClick}
            className={styles.sidebarItem}
            title={data.title}
        />
    )
})