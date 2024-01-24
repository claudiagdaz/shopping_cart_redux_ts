import styles from "./Cart.module.css"

function Cart() {
    return(
        <main className="page">
            <h1>Shopping Cart</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Banana</td>
                        <td>10</td>
                        <td>$1.25</td>
                        <td><button>X</button></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                    <td>Total</td>
                    <td></td>
                    <td className={styles.total}>$150.00</td>
                    <td></td>
                    </tr>
                </tfoot>
            </table>
            <form>
                <button className={styles.button}>Checkout</button>
            </form>
        </main>

    )
}

export default Cart