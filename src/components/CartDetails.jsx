import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeAllCart,
  removeCart,
  removeSingleItem,
} from "../redux/features/cartSlice";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";

function CartDetails() {
  const carts = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  function send(e) {
    dispatch(addToCart(e));
  }

  function handelRemoveItem(e) {
    dispatch(removeCart(e));
  }

  function handelRemoveSingleItem(e) {
    dispatch(removeSingleItem(e));
  }
  function handelRemoveAllCart(e) {
    dispatch(removeAllCart(e));
  }

  const total = () => {
    let totalPrice = 0;
    carts.map((el, index) => {
      totalPrice = el.price * el.qnty + totalPrice;
    });
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    total();
  });
  return (
    <section className="pt-24 mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div className="flex justify-between bg-gray-700 p-4 rounded-md">
        <p className="text-white">
          Cart Calculation {carts.length > 0 ? `(${carts.length})` : ""}
        </p>
        <div className="flex bg-red-500 hover:bg-red-400 px-2 py-1 text-white rounded-sm items-center">
          <MdDeleteForever size={20} />
          <button className="" onClick={() => handelRemoveAllCart()}>
            Empty Cart
          </button>
        </div>
      </div>
      <>
        {carts.length > 0 ? (
          <>
            {carts.map((data, index) => {
              return (
                <>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" className="shrink-0 md:order-1">
                        <img
                          className="h-20 w-20 "
                          src={data.imgdata}
                          alt="imac image"
                        />
                      </a>

                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            type="button"
                            id="decrement-button-2"
                            data-input-counter-decrement="counter-input-2"
                            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                            onClick={
                              data.qnty <= 1
                                ? () => handelRemoveItem(data.id)
                                : () => handelRemoveSingleItem(data)
                            }
                          >
                            <svg
                              className="h-2.5 w-2.5 text-gray-900"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            id="counter-input-2"
                            data-input-counter
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-lg font-medium text-gray-900 focus:outline-none focus:ring-0 "
                            placeholder=""
                            value={data.qnty}
                            required
                          />
                          <button
                            type="button"
                            id="increment-button-2"
                            data-input-counter-increment="counter-input-2"
                            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                            onClick={() => send(data)}
                          >
                            <svg
                              className="h-2.5 w-2.5 text-gray-900"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900 ">
                            <span className="text-red-600">Total:</span> $
                            {data.qnty * data.price}
                          </p>
                        </div>
                      </div>
                      <div className="text-end md:order-2 md:w-32">
                        <p className="text-base font-bold text-gray-900 ">
                          <span className="text-green-600">Price:</span> $
                          {data.price}
                        </p>
                      </div>
                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a
                          href="#"
                          className="text-base font-medium text-gray-900 hover:underline "
                        >
                          {data.dish}
                        </a>

                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline "
                            onClick={() => handelRemoveItem(data.id)}
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            <div className="flex justify-between p-4 rounded-md border border border-gray-200">
              <p className="text-gray-900">.</p>
              <div className="flex  px-2 py-1 text-gray-900 rounded-sm items-center">
                <h1 className="">Total Price: {totalPrice}</h1>
              </div>
            </div>
          </>
        ) : (
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  md:p-6">
            <FaShoppingCart size={50} className="mx-auto text-gray-500" />
            <h1 className="text-center pt-4 text-lg text-gray-500">
              Your Cart Is Empty
            </h1>
          </div>
        )}
      </>
    </section>
  );
}

export default CartDetails;
