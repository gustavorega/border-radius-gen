import styles from '../styles/Canva.module.css'
import { useState } from 'react'

export default function Canva(){
    const [topLeft, setTopLeft] = useState('10px')
    const [topRight, setTopRight] = useState('10px')
    const [bottomRight, setBottomRight] = useState('10px')
    const [bottomLeft, setBottomLeft] = useState('10px')
    return (
        <>
        <div className={styles.main}>
            <div className={styles.inputs}>
                <input className={styles.borderSet} 
                            onChange={e => setTopLeft(e.target.value + 'px')}
                            id="topLeft" type="number"></input>
                <input className={styles.borderSet} 
                            onChange={e => setTopRight(e.target.value + 'px')}
                            id="topRight" type="number"></input>
            </div>
            <div className={styles.canva}>
                
                <div style={{
                    borderTopLeftRadius:topLeft,
                    borderTopRightRadius:topRight,
                    borderBottomRightRadius :bottomRight,
                    borderBottomLeftRadius :bottomLeft
                }} className={styles.subject}>
                    <div>{`border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};`}</div>
                </div>
            </div>

            <div className={styles.inputs}>
                <input className={styles.borderSet} 
                            onChange={e => setBottomLeft(e.target.value + 'px')}
                            id="bottomLeft" type="number"></input>
                <input id="units" type="radio" name='unit'/>
                <label for="units">Pixel (px)</label>
                <input id="units" type="radio" name='unit'/>
                <label for="units">Percent (%)</label>
                <input className={styles.borderSet} 
                            onChange={e => setBottomRight(e.target.value + 'px')}
                            id="topRight" type="number"></input>
            </div>
            
        </div>
        </>
    )
}