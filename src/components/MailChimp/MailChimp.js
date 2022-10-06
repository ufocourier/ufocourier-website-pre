import React from 'react';

export const MailChimp = () => {
  return (
    <script id="mcjs">
      !function(c,h,i,m,p)
      {
        ((m = c.createElement(h)),
          (p = c.getElementsByTagName(h)[0]),
          (m.async = 1),
          (m.src = i),
          p.parentNode.insertBefore(m, p))
      }
      (document,"script","https://chimpstatic.com/mcjs-connected/js/users/68dd166f70b27de4d248f4e38/ced60a8cad1b7099183b5b1d7.js");
    </script>
  );
};
