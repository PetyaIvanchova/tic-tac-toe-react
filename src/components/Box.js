import './Box.css'

const Box = ({onClick, value}) => {
    const style = value === 'X' ? 'box x' : 'box o'

    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}

export default Box;