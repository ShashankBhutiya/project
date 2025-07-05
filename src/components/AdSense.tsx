import { useEffect } from 'react';

interface AdSenseProps {
  adSlot: string;
  style?: React.CSSProperties;
  format?: string;
  layout?: string;
  layoutKey?: string;
}

const AdSense: React.FC<AdSenseProps> = ({ 
  adSlot, 
  style = { display: 'block' }, 
  format = 'auto', 
  layout = '', 
  layoutKey = '' 
}) => {
  // Show placeholder in development
  if (process.env.NODE_ENV !== 'production') {
    return (
      <div style={{
        ...style,
        backgroundColor: 'rgba(0,0,0,0.1)',
        border: '2px dashed #666',
        padding: '20px',
        textAlign: 'center',
        color: '#999',
        margin: '20px 0'
      }}>
        Ad Slot: {adSlot}
        <div style={{ fontSize: '12px', marginTop: '8px' }}>This is a placeholder for ads (only visible in development)</div>
      </div>
    );
  }
  useEffect(() => {
    // Load the AdSense script
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3113793159815987';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    // Initialize the ad
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense Error:', e);
    }

    return () => {
      // Cleanup
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="adsense-container">
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-3113793159815987"
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive="true"
        data-ad-layout={layout}
        data-ad-layout-key={layoutKey}
      ></ins>
    </div>
  );
};

export default AdSense;
