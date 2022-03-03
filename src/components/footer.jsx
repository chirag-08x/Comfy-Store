const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="footer">
      <section className="section-center footer-section">
        <p>
          &copy; {date} <span id="ftr-text">comfysloth</span> all rights
          reserved.
        </p>
      </section>
    </section>
  );
};

export default Footer;
