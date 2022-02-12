import styles from "./Signup.module.css";

function Signup() {
    return (
        <div className={styles.background}>
            <h1 className={styles.title}>CODING</h1>
            <form className={styles.form}>
                <label className={styles.label}>이름
                    <input className={styles.input} type="text" placeholder="이름"></input>
                </label>
                <br />
                <br />
                <label className={styles.label}>학번
                    <input className={styles.input} type="number" placeholder="학번"></input>
                </label>
                <br />
                <br />
                <label className={styles.label}>PASSWORD
                    <input className={styles.input} type="text" placeholder="PW"></input>
                </label>
                <br />
                <br />
                <label className={styles.label}>이메일
                    <input className={styles.input} type="email" placeholder="이메일"></input>
                </label>
                <br />
                <br />
            </form>
            <button className={styles.button}>회원가입</button>
        </div>
    );
}


export default Signup;