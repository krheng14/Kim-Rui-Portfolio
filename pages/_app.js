//_app.js
import Chakra from '../components/chakra.js'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts.js'
import { AnimatePresence } from 'framer-motion'
//Layout -> page/Component -> Main
//_app.js is always loaded first before index.js
//in main.js, it is named as Main for the exported default. But here we label main locally as Layout.
//router.route shows the exact path in the /pages directory
//AnimatePresence allows for components that are leaving the screen (unmounting) to play out their exit animations before they're actually removed from the DOM. This is particularly useful for page transitions in a React application.

const Website = ({ Component, pageProps, router }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website
