import FirstImage from './../assets/images/karsten-winegeart-T-yAoikgido-unsplash.jpg';
import FirstLogo from './../assets/bamos_logo/BAMOS DESIGN_logo_white.svg';

export default function Firstview() {
  return (
    <>
      <h1>
        <img src={FirstImage} alt="トップ画像" className="Firstview"></img>
      </h1>
      <div>
        <img src={FirstLogo} className="FirstLogo" />
      </div>
    </>
  );
}
