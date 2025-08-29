import { useEffect } from "react";

function PhoneConversion() {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "AW-17442854248/VSUcCMbOlpAbEOiqs_1A", {
        phone_conversion_number: "(833) 959-2866",
      });
    }
  }, []);

  return (
    <div className="text-2xl font-bold text-green-700 mb-4 animate-pulse">
      <a href="tel:+18339592866"> +1-833-959-2866</a>
    </div>
  );
}

export default PhoneConversion;
