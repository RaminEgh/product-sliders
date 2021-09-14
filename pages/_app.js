import '../styles/styles.css'
import {colors} from "../themes/theme";

function MyApp({Component, pageProps}) {
    return <>
        <style jsx global>
            {`
              * {
                color: ${colors.textColor};
              }
            `}
        </style>
        <Component {...pageProps} />
    </>
}

export default MyApp
