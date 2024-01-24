import styles from "./Products.module.css"


function Products() {
    return (
        <main className="page">
            <ul className={styles.products}>
                <li>
                    <article className={styles.product}>
                        <figure>
                            <figcaption className={styles.caption}>

                            </figcaption>
                        </figure>
                        <div>
                            <h1>Product name</h1>
                            <p>Product description</p>
                            <p>$ price</p>
                            <button>Add to cart</button>
                        </div>
                    </article>
                </li>
            </ul>
        </main>
    )
}

export default Products