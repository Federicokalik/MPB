import Layout from "../components/layout"
import "../styles/boxicons.min.css"
import "../styles/bootstrap-icons.css"
import "../styles/slick.css"
import "../styles/bootstrap.min.css"
import "../styles/animate.css"
import "../styles/style.css"
import "../styles/responsive.css"
import "../styles/custom.css"

function MyApp({ Component, pageProps }) {

return (
  <Layout>  
  <Component {...pageProps} />
  </Layout>
)
}

export default MyApp
