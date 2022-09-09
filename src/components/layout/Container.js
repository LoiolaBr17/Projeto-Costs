import styles from './Container.module.css'

function Container({children, customClass}){
    return(
        <main className={`${styles.container} ${styles[customClass]}`}>
            {children}
        </main>
    )
}

export default Container