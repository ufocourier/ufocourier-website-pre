import React, { CSSProperties, useEffect, useState } from 'react';

import { useThemeConfig } from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';

function getCookie(cname) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function CookieConsent(): JSX.Element | null {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const allowed = !!getCookie('allowed');
      if (!allowed) {
        setShow(true);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const deleteCookies = () => {
    // https://stackoverflow.com/a/33366171
    let cookies = document.cookie.split('; ');
    for (let c = 0; c < cookies.length; c++) {
      let d = window.location.hostname.split('.');
      while (d.length > 0) {
        let cookieBase =
          encodeURIComponent(cookies[c].split(';')[0].split('=')[0]) +
          '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' +
          d.join('.') +
          ' ;path=';
        let p = location.pathname.split('/');
        document.cookie = cookieBase + '/';
        while (p.length > 0) {
          document.cookie = cookieBase + p.join('/');
          p.pop();
        }
        d.shift();
      }
    }

    setShow(false);
  };

  const allowCookies = () => {
    document.cookie = 'allowed=true';
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return (
    <div style={ccStyle.container}>
      <div>Allow all cookies?</div>
      <div style={ccStyle.buttonBar}>
        <button onClick={allowCookies} style={ccStyle.allowedButton}>
          Allow all cookies
        </button>
        <button onClick={deleteCookies} style={ccStyle.disallowedButton}>
          Don't use cookies
        </button>
      </div>
    </div>
  );
}

const ccStyle: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    maxWidth: 300,
    border: '1px solid #388bf0',
    position: 'fixed',
    bottom: 10,
    right: 10,
    padding: 10,
    backgroundColor: 'white',
    boxShadow: '10px 10px 5px 0px rgba(173,166,166,0.75)',
  },
  buttonBar: {
    marginTop: 10,
    justifyContent: 'center',
    width: '100%',
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  allowedButton: {
    backgroundColor: '#388bf0',
    color: 'white',
    padding: 10,
    cursor: 'pointer',
  },
  disallowedButton: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    cursor: 'pointer',
  },
};

function Footer(): JSX.Element | null {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;

  return (
    <>
      <CookieConsent />
      <FooterLayout
        style={style}
        links={links && links.length > 0 && <FooterLinks links={links} />}
        logo={logo && <FooterLogo logo={logo} />}
        copyright={copyright && <FooterCopyright copyright={copyright} />}
      />
    </>
  );
}

export default React.memo(Footer);
