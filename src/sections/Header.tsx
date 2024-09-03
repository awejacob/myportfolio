export const Header = () => {
  return <div className="mx-auto w-full flex justify-center items-center fixed top-3 z-10">
    <nav className="flex rounded-full bg-white/10 p-0.5 gap-1 backdrop-blur border">
      <a href="#" className="nav-item">Home</a>
      <a href="#" className="nav-item">Projects</a>
      <a href="#" className="nav-item">About</a>
      <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-white">Contact</a>
    </nav>
  </div>;
};
