const Footer = ():JSX.Element => {
  return (
    <footer className=" bg-footer-background bg-30% bg-no-repeat bg-right">
      <div className="mt-32 container flex justify-between max-w-screen-lg">
        <div className="text-center grid gap-y-7">
          <p className="font-bold">Contact Us</p>
          <p>Discord Server</p>
          <p>yoroshi@teyvat.dev</p>
          <div className="container justify-around flex">
            <a href="">
              <img className="h-6" src="/discord.svg" />
            </a>
            <a href="">
              <img className="h-6" src="/instagram.svg" />
            </a>
            <a href="">
              <img className="h-6" src="/twitter.svg" />
            </a>
          </div>
        </div>
        <div className="relative">
          <img className="animate-bounce mt-4 md:mt-0 md:h-24" src="/white-slime.svg" />
        </div>
        <div className="text-center grid gap-y-7">
          <p className="font-bold">Quick Links</p>
          <a>Home</a>
          <a>Docs</a>
          <a>Contact</a>
        </div>
      </div>
      <div className="container text-center py-10">
        <p>2020 Teyvat Dev</p>
      </div>
    </footer>
  );
};
export default Footer;
