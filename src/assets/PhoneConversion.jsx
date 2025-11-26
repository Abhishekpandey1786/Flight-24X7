import { useEffect } from "react";

function PhoneConversion() {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "AW-17442854248/VSUcCMbOlpAbEOiqs_1A", {
        phone_conversion_number: "(833)959-2254",
      });
    }
  }, []);

  return (
    <div className="text-2xl font-bold text-green-700 mb-4 animate-pulse">
      <a href="tel:(833)959-2254">(833)959-2254</a>
    </div>
  );
}

export default PhoneConversion;
