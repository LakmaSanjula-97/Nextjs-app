import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <nav className="container">
        <div className="logo">
          <Link href="/"> traversy media</Link>
        </div>
        <div className="links">
          <Link href="/about"> About</Link>
          <Link href="/about/team"> team</Link>
          <Link href="/code/repos"> code</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header
