import { useState, useEffect, useRef } from "react";
import "./map.css";

export default function Map() {
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const loadHandler = () => setIsLoaded(true);
      iframe.addEventListener("load", loadHandler);

      const timeoutId = setTimeout(() => setIsLoaded(true), 5000);

      return () => {
        iframe.removeEventListener("load", loadHandler);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <div className="map-container">
      {!isLoaded && (
        <div className="map-loading">
          <p>Chargement de la carte...</p>
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3996.97622640745!2d-0.3686280555132009!3d45.72003388695562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4800f3b8f0aadcd9%3A0x1fac6cc5a7591f00!2zTGUgQ2hhbnRpZXIgZCfDoCBDw7R0w6k!5e1!3m2!1sfr!2sfr!4v1752151583588!5m2!1sfr!2sfr"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-scripts allow-same-origin allow-popups"
        ref={iframeRef}
        title="Carte Google Maps"
        className="map-iframe"
      />
    </div>
  );
}
