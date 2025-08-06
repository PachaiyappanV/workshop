import CustomerSearch from "../customer-search";
import Logo from "../logo";
import RegisterCustomer from "../register-customer";

const Header = () => {
  return (
    <header
      className="flex items-center justify-between  border-b 
    border-white/20 px-3 py-3 sm:px-9 sticky top-0 z-50  backdrop-blur "
    >
      <Logo />
      <CustomerSearch />

      <ul className="flex gap-x-6 text-sm h-full">
        <li>
          <RegisterCustomer />
        </li>
      </ul>
    </header>
  );
};

export default Header;
