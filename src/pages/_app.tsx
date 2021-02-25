/**
 * Este arquivo serve para reaproveitar uma estrutura prévia
 * entre todas as páginas da aplicação.
 */

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
