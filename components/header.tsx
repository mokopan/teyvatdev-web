const Header = ():JSX.Element => {
  return (
    <div className="container mx-auto py-24">
      <nav className="flex justify-between">
        <h1 className="text-5xl font-bold">Teyvat.dev</h1>
        <div className="hidden md:flex flex-row">
          <a className="pr-5 text-lg">Home</a>
          <a className="pr-5 text-lg">Docs</a>
          <a className="pr-5 text-lg">Contact</a>
          <a className="pr-5 text-lg">Sign up</a>
        </div>
      </nav>
    </div>
  );
};
export default Header;
