import "../styles/globals.css";
import { Cabin } from "@next/font/google";

const cabin = Cabin({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
    return (
        <>
            <main className={cabin.className}>
                <div className=' wrapper bg-color-main'>
                    <Component {...pageProps} />
                </div>
            </main>
        </>
    );
}

export default MyApp;
