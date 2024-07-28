import React from "react";
import whatsappLogo from "../../assets/whatsapp.webp";

export default function WhatsappButton() {
  return (
    <div className="group fixed bottom-0 right-0 p-2 flex items-end justify-end w-24 h-24">
      <a
        href="https://wa.me/254719668125"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsappLogo}
          alt="Whatsapp Logo"
          className="h-16 w-16 rounded-full"
        />
      </a>
    </div>
  );
}
