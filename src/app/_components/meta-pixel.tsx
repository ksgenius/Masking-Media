/* eslint-disable @next/next/no-img-element */
import Script from "next/script";

const MetaPixel = () => (
  <>
    {/* Meta Pixel Code */}
    <Script
      id="meta-pixel-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '863250672591106');
          fbq('track', 'PageView');
        `,
      }}
    />
    {/* NoScript Image */}
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=863250672591106&ev=PageView&noscript=1"
        alt="Facebook Pixel"
      />
    </noscript>
  </>
);

export default MetaPixel;