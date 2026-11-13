import styles from "./FloatingWhatsApp.module.css";

function FloatingWhatsApp() {
  return (
    <a
      className={styles.whatsappButton}
      href="https://wa.me/14126284979"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.2c2.3 1.3 4.9 2 7.7 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.5c-2.5 0-5-.7-7.1-2l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.3-2.2-2-4.6-2-7.1C2.5 8.5 8.5 2.5 16 2.5S29.5 8.5 29.5 16 23.5 28.9 16 28.9zm7.7-10.7c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.6-.2-.8.2s-1 1.2-1.2 1.4c-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2s1.3 3.7 1.5 4c.2.3 2.6 4 6.3 5.6.9.4 1.6.6 2.2.8.9.3 1.8.3 2.4.2.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z"/>
      </svg>
      <span>Chat with us</span>
    </a>
  );
}

export default FloatingWhatsApp;
