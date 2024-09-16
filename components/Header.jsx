import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const [dark, setDark] = useTheme();
  function handleDarkMood() {
    setDark(!dark);
    localStorage.setItem("darkTheme",(!dark));
  }
  return (
    <header className={`header-container ${dark ? "dark": '' }`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={handleDarkMood}>
          {dark ? (
            <>
            <i className="fa-solid fa-sun" />
            &nbsp;&nbsp;Light Mode
           </>
          ):(
            <>
            <i className="fa-solid fa-moon" />
            &nbsp;&nbsp;Dark Mode
          </>
        )}
        </p>
    </div>
    </header >
  )
}
