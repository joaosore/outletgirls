'use client';

import { Analytics } from '@vercel/analytics/react';
import GlobalStyles from '../styles/global';
import { GoogleAnalytics } from '@next/third-parties/google';

import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../styles/theme';
import StyledComponentsAntdRegistry from '../lib/AntdRegistry';
import { useState } from 'react';

const Providers = (props: React.PropsWithChildren) => {
  const [totalCart, setTotalCart] = useState(0);
  const [user, setUser] = useState();

  return (
    <StyledComponentsAntdRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Analytics />
        <GoogleAnalytics gaId="G-675HG95714" />
        {props.children}
      </ThemeProvider>
      <ToastContainer />
    </StyledComponentsAntdRegistry>
  );
};

export default Providers;
