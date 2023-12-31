import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <section>
        <ul>
          <li>
            <a href='facebook.com' target="_blank">
              <img src="/images/fb.png" alt='Logo facebook'/>
            </a>
          </li>
          <li>
            <a href='twitter.com' target="_blank">
              <img src="/images/tw.png" alt='Logo twitter'/>
            </a>
          </li>
          <li>
            <a href='instagram.com' target="_blank">
              <img src="/images/ig.png" alt='Logo instagram'/>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/logo.png" alt='Logo da Organo'/>
      </section>
      <section>
        <h4>Developed by Gabriel.</h4>
      </section>
    </footer>
  );
};

export default Footer;