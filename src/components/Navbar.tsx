const Navbar = () => {
  return (
    <nav
      className="w-full flex justify-between items-center py-4 px-8 shadow fixed top-0 left-0 z-50 border-b"
      style={{ background: "#050b1e", borderColor: "#a654fb" }}
    >
      <div
        className="font-bold text-xl tracking-widest"
        style={{ color: "#a654fb" }}
      >
        Margo Chen
      </div>
      <ul className="flex gap-6 font-medium" style={{ color: "#fbfefe" }}>
        <li>
          <a href="#about" className="hover:text-[#ea97ef]">
            關於我
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-[#ea97ef]">
            技能
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-[#ea97ef]">
            專案
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-[#ea97ef]">
            經歷
          </a>
        </li>
        <li>
          <a href="#contributions" className="hover:text-[#ea97ef]">
            貢獻
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#ea97ef]">
            聯絡
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
