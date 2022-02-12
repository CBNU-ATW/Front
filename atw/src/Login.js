import styles from "./Login.module.css";

function Login() {
    return (
        <div className={styles.background}>
            <h1 className={styles.title}>CODING</h1>
            <form className={styles.form}>
                <label className={styles.label}>학번
                    <input className={styles.input} type="number" placeholder="학번"></input>
                </label>
                <br />
                <br />
                <label className={styles.label}>PASSWORD
                    <input className={styles.input} type="text" placeholder="PW"></input>
                </label>
            </form>
            <button className={styles.button}>로그인</button>
        </div>
    );
}


export default Login;