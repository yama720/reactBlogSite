import LogoImg from './Logo';

export default function Header({ children }) {
  return (
    <header>
      <LogoImg />
      <button className="drawerButton">
        <span></span>
        <span></span>
        <span></span>
      </button>
      {children}
    </header>
  );
}
