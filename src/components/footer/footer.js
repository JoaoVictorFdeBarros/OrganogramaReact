import './footer.css'

function Footer() {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://facebook.com">
                        <img src="/images/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com">
                        <img src="/images/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com">
                        <img src="/images/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/images/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Footer