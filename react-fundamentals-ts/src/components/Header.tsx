import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
             <strong><Link to={"/"}>Logo</Link></strong>
        </header>
       
    );
} 