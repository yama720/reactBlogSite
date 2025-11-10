import Logo from './../assets/bamos_logo/BAMOS DESIGN_logo_black.svg';

export default function LogoImg() {
  return (
    <h1
      style={{
        paddingInlineStart: 50,
      }}
    >
      <img src={Logo} alt="ロゴ"></img>
    </h1>
  );
}
