import CustomerSearch from "../customer-search";
import Logo from "../logo";
import RegisterCustomer from "../register-customer";
import ThemeToggle from "../theme-toggle";

const Header = () => {
  return (
    <header
      className="flex items-center  justify-between  border-b 
    border-white/20 px-2 py-3 sm:px-7 sticky top-0 z-50  backdrop-blur "
    >
      <Logo />
      <CustomerSearch />

      <ul className="flex gap-x-1 sm:gap-x-2 text-sm">
        <li>
          <RegisterCustomer />
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </header>
  );
};

export default Header;
