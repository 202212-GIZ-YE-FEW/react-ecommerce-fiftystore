import { React } from "react";

function Footer() {
    return (
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col-1">
                        <span className="sr-only">FiftyStore</span>
                        <p>
                            E-Marketing is an electronic platform registered in Commercial Registration No. 1010602160 that connects food product providers with retail stores.
                        </p>
                    </div>

                    <div class="footer-col-2">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>

                    <div class="footer-col-3">
                        <h3>Follow us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>YouTube</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p class="copyright">Copyright &copy; 2023 - Fifty Store</p>
            </div>
        </div>
    );
}

export default Footer;