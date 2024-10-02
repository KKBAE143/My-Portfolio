const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="social-icon">
    <a href="https://github.com/KKBAE143" target="_blank" rel="noopener noreferrer">
        <img src="/assets/github.svg" alt="GitHub" className="w-10 h-7" />
    </a>
</div>
<div className="social-icon">
    <a href="https://www.linkedin.com/in/itsmekarthikpilli/" target="_blank" rel="noopener noreferrer">
        <img src="   https://cdn-icons-png.flaticon.com/512/3536/3536505.png " alt="Linkdin" className="w-8 h-7" />
    </a>
</div>
<div className="social-icon">
    <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
        <img src="/assets/instagram.svg" alt="Instagram" className="w-10 h-7" />
    </a>
</div>

      <p className="text-white-500">© 2024 Pilli. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
