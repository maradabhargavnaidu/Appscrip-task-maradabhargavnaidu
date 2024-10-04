import HeartIcon from "@/app/icons/HeartIcon";
import LogoIcon from "@/app/icons/LogoIcons";
import ProfileIcon from "@/app/icons/ProfileIcons";
import SearchIcon from "@/app/icons/SearchIcon";
import ShoppingBagIcon from "@/app/icons/ShoppingBagIcon";
const Navbar = () => {
  return (
    <nav className="main-nav container">
      <LogoIcon />
      <h2>LOGO</h2>
      <div className="nav-right-items">
        <SearchIcon />
        <HeartIcon />
        <ShoppingBagIcon />
        <ProfileIcon />
      </div>
    </nav>
  );
};

export default Navbar;
