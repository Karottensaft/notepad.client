import { memo } from 'react'

type Props = {
    icon?: JSX.Element
    title?: string
    onClick: () => void
    className: string
}

export const Button = memo<Props>(({
    onClick,
    icon,
    title,
    className
}) => {
    return (
        <button onClick={onClick} className={className}>
            {icon && icon}
            {title && title}
        </button>
    )
})