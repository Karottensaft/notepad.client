﻿import { memo } from 'react'
import styles from './Header.module.scss'
import { Title } from './title/Title.tsx'

type Props = {
    title: string
}

export const Header = memo<Props>(({
    title
}) => (
    <div className={styles.appHeader}>
        <Title text={title}/>
    </div>
))