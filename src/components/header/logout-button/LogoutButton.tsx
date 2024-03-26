import { Button } from '../../../shared/button/Button.tsx'
import styles from './LogoutButton.module.scss'

export const LogoutButton = () => {
    return (
        <Button
            title={'logout'}
            onClick={() => console.log('a')}
            className={styles.button}
        />
    )
}