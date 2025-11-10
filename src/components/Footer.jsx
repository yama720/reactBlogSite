import FooterLogoImg from './../assets/bamos_logo/BAMOS DESIGN_logo_white.svg';

export default function Footer({ children }) {
  return (
    <>
      <footer>
        <div className="fotterImage">
          <img src={FooterLogoImg} />
        </div>
        {children}
      </footer>
    </>
  );
}
