import "../styles/globals.css";
export default function App({Component, pageProps}) {
  console.log('HELLO FROM APP.tsx')
  return <Component {...pageProps}/>
}
