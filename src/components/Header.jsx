import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const carts = useSelector((state) => state.cart.carts);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            E-Commerce
          </span>
        </Link>
        <Link
          to="/cart"
          className="flex relative md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
        >
          <span className="p1" data-count={carts.length}></span>
          <FaShoppingCart size={30} />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
