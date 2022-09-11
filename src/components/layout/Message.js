import { useState, useEffect } from 'react'

import styles from './Message.module.css'

function Message({type, msg}){

    const [visible, SetVisible] = useState(false)

    useEffect(() => {
        if(!msg){
            SetVisible(false)
            return
        }

        SetVisible(true)

        const timer = setTimeout(() => {
            SetVisible(false)
        }, 3000)

        return () => clearTimeout(timer)

    }, [msg])

    return (
        <>
        {visible && (
            <div className={`${styles.message} ${styles[type]}`}>
                {msg}
            </div>
        )}
        </>
    )
}

export default Message