import { Link } from "react-router-dom";
import styles from "./CartLink.module.css"

function CartLink() {
    return(
        <Link to="/cart" className={styles.link}>
            <span className={styles.text}>🛒&nbsp;&nbsp;</span>
        </Link>
    )
}

export default CartLink