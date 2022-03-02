const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="footer">
      <section className="section-center">
        <p> &copy; comfysloth all rights reserved {date}. </p>
      </section>
    </section>
  );
};

export default Footer;
