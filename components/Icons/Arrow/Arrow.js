import styles from './Arrow.module.css'

const Arrow = ({dir = 'right', size = 8, color = 'black', weight = 3, cursor = 'pointer', onClick, className = ''}) => {
    return (
        <i
            className={[styles.arrow, styles[dir], className].join(' ')}
            style={{padding: `${size}px`, color, borderWidth: `0 ${weight}px ${weight}px 0`, cursor}}
            onClick={onClick}
        />
    );
};



export default Arrow;