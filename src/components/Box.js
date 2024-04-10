import './Box.css'

const Box = ({onClick, gameOver, value}) => {
    let style = value === 'X' ? 'box x' : 'box o'
    if (!gameOver) {
        style += ' box-shadow'
    }
    console.log(gameOver)
    return (
        <button disabled={gameOver} className={style} onClick={onClick}>{value}</button>
    )
}

export default Box;