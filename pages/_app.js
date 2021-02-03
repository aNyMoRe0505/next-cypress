/* eslint-disable react/prop-types */
import App from 'next/app';
import { appWithTranslation } from '../services/I18Next';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
