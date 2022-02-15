import styles from '../styles/Canva.module.css'
import { useState, useRef } from 'react'

export default function Canva(){
    const [topLeft, setTopLeft] = useState('10')
    const [topRight, setTopRight] = useState('10')
    const [bottomRight, setBottomRight] = useState('10')
    const [bottomLeft, setBottomLeft] = useState('10')
    const [myUnit, setMyUnit] = useState('px')
    const codeRef = useRef()
    const btnCopy = useRef()


    function copyText() {
       navigator.clipboard.writeText(codeRef.current.innerText)
       btnCopy.current.innerText = "copied 👍"
       setTimeout(() => {
        btnCopy.current.innerText = "copy"
       }, 2000);
       
    //    alert(codeRef.current.innerText)
    }

    return (
        <>
        <div className={styles.main}>
            <div className={styles.inputs}>
                <input value={topLeft} className={styles.borderSet} 
                            onChange={e => setTopLeft(e.target.value)}
                            id="topLeft" type="number"></input>
                <input value={topRight} className={styles.borderSet} 
                            onChange={e => setTopRight(e.target.value)}
                            id="topRight" type="number"></input>
            </div>
            <div className={styles.canva}>
                
                <div style={{
                    borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
                    
                }} className={styles.subject}>
                    <div>
                        <p>
                            <code ref={codeRef}>{`border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px;`}</code>
                        </p>
                        <p className={styles.copyBtn}>
                            <a ref={btnCopy} href='#' onClick={copyText}>copy</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.inputs}>
                <input value={bottomLeft} className={styles.borderSet} 
                            onChange={e => setBottomLeft(e.target.value)}
                            id="bottomLeft" type="number"></input>
                <input value={bottomRight} className={styles.borderSet} 
                            onChange={e => setBottomRight(e.target.value)}
                            id="bottomRight" type="number"></input>
            </div>
            
        </div>
        </>
    )
}