import { FormContact } from "@components";
import { BiPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { RiUserLocationLine } from "react-icons/ri";

export const ContactPage = () => {
  return (
    <>
      <div className="h-full p-10 flex flex-col gap-5 lg:gap-16 text-gray-700 font__poppins overflow-x-hidden scrollable">
        <h2 className="font-black text-3xl title__page">Contáctame</h2>

        <div className="h-full flex-col lg:flex-row flex items-center md:items-start gap-12">
          <div className="md:h-3/4 flex flex-wrap md:flex-col gap-8">
            <div className="flex items-center gap-3 text-xl text-tertiary-100">
              <BiPhoneCall />
              <p className="flex flex-col text-base font-bold text-gray-700">
                Celular
                <span className="font-normal text-sm">+51 975 597 994</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-xl text-tertiary-100">
              <GrMail />
              <p className="flex flex-col text-base font-bold text-gray-700">
                Correo Electrónico
                <span className="font-normal text-sm">huancasr9@gmail.com</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-xl text-tertiary-100">
              <RiUserLocationLine />
              <p className="flex flex-col text-base font-bold text-gray-700">
                Ubicación
                <span className="font-normal text-sm">Chiclayo, Perú</span>
              </p>
            </div>
          </div>

          <div className="w-full lg:px-10">
            <FormContact />
          </div>
        </div>
      </div>
    </>
  );
};
