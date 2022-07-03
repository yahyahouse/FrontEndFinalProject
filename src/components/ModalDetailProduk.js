import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../assets/img/card_detailproduk.png";

import Close from "../assets/img/fi_x.svg";

const ModalDetailProduk = ({ isOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="sm:static sm:opacity-0 fixed bottom-[-200%]"
              enterTo="sm:static sm:opacity-100 fixed bottom-0"
              leave="ease-in-out duration-300"
              leaveFrom="sm:static sm:opacity-100 fixed bottom-0"
              leaveTo="sm:static sm:opacity-0 fixed bottom-[-200%]"
            >
              <Dialog.Panel className="w-full h-full sm:items-center justify-center items-end flex">
                <div
                  className={
                    isOpen
                      ? "bg-black bg-opacity-50 fixed top-0 left-0 right-0 bottom-0"
                      : "hidden"
                  }
                />
                <div
                  className={
                    isOpen
                      ? "w-full h-[100vh] sm:items-center sm:justify-center items-end flex fixed bottom-[0] ease-in-out duration-[1s]"
                      : "w-full h-[100vh] sm:items-center sm:justify-center items-end flex fixed bottom-[-100%] ease-in-out duration-[1s] z-50"
                  }
                >
                  <div className="sm:rounded-2xl sm:w-[360px] duration-[1s] bg-white w-full flex flex-col items-center rounded-t-[16px] shadow-sm">
                    <button
                      onClick={closeModal}
                      className="sm:hidden w-full h-[38px] flex items-center justify-center"
                    >
                      <div className="w-[60px] h-[6px] rounded-[20px] bg-gray-900" />
                    </button>
                    <div className="sm:flex hidden justify-end w-full h-[38px] items-center pr-[16px] pt-[10px]">
                      <img
                        id="klik"
                        onClick={closeModal}
                        className="close sm:flex hidden cursor-pointer"
                        src={Close}
                        alt="img"
                      />
                    </div>
                    <div className="w-[360px] flex flex-col items-center px-[32px]">
                      <p className="text-sm text-justify font-semibold mb-[8px] w-full">
                        Masukkan Harga Tawarmu
                      </p>
                      <p className="text-sm text-justify font-normal text-gray-900 mb-[16px] w-full">
                        Harga tawaranmu akan diketahui penjual, jika penjual
                        cocok kamu akan segera dihubungi penjual.
                      </p>
                      <div className="p-[16px] flex flex-col w-full rounded-2xl shadow-md mb-[24px] bg-gray-200">
                        <div className="flex">
                          <div className="rounded-xl h-[48px] w-[48px] overflow-hidden">
                            <img src={Card} alt="" />
                          </div>
                          <div className="pl-[16px] flex flex-col">
                            <p className="text-sm font-semibold ">
                              Jam Tangan Casio
                            </p>
                            <p className="text-sm font-normal">Rp 250.000</p>
                          </div>
                        </div>
                      </div>
                      <p className="-ml-56 mb-1 font-semibold">Harga Tawar</p>
                      <div className="p-[16px] flex flex-col border w-full rounded-2xl shadow-md mb-[24px]">
                        <div className="flex">
                          <div className="pl-[5px] flex flex-col">
                            <p className="text-sm font-normal">Rp 0,00</p>
                          </div>
                        </div>
                      </div>
                      <Link
                        className="h-[48px] rounded-2xl w-full bg-purple-700 text-white flex justify-center items-center mb-[20px]"
                        to={"#"}
                      >
                        <p className="justify-center font-medium text-sm mx-[40px]">
                          Kirim
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalDetailProduk;
