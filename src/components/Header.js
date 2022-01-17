function Header(props) {
  return (
    <header className="header">
      <img src={props.src} alt="Логотип сайта Место" className="header__logo" />
    </header>
  );
}
export default Header;
