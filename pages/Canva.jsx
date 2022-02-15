import styles from '../styles/Canva.module.css'
import { useState } from 'react'

export default function Canva(){
    const [topLeft, setTopLeft] = useState('10')
    const [topRight, setTopRight] = useState('10')
    const [bottomRight, setBottomRight] = useState('10')
    const [bottomLeft, setBottomLeft] = useState('10')
    const [myUnit, setMyUnit] = useState('px')
    return (
        <>
        <div className={styles.main}>
            <div className={styles.inputs}>
                <input value={topLeft} className={styles.borderSet} 
                            onChange={e => setTopLeft(e.target.value + 'px')}
                            id="topLeft" type="number"></input>
                <input value={topRight} className={styles.borderSet} 
                            onChange={e => setTopRight(e.target.value + 'px')}
                            id="topRight" type="number"></input>
            </div>
            <div className={styles.canva}>
                
                <div style={{
                    borderTopLeftRadius:`${topLeft}px`,
                    borderTopRightRadius:`${topRight}px`,
                    borderBottomRightRadius :`${bottomRight}px`,
                    borderBottomLeftRadius :`${bottomLeft}px`
                }} className={styles.subject}>
                    <div>{`border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px;`}</div>
                </div>
            </div>

            <div className={styles.inputs}>
                <input value={bottomLeft} className={styles.borderSet} 
                            onChange={e => setBottomLeft(e.target.value + 'px')}
                            id="bottomLeft" type="number"></input>
                <input value={bottomRight} className={styles.borderSet} 
                            onChange={e => setBottomRight(e.target.value + 'px')}
                            id="bottomRight" type="number"></input>
            </div>
            
        </div>
        </>
    )
}