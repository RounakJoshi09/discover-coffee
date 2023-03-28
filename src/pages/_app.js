import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (<><Component {...pageProps} />  <footer className="footer-div">
    <span className="footer-text">CopyRight@2023</span>
  </footer></>);
}
