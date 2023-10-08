import { BsFillSendFill } from "react-icons/bs";

export const FormContact = () => {
  return (
    <form className="flex flex-col gap-4">
      {/* <h4 className="font-medium text-gray-700">
        Déjame saber cómo puedo ayudarte!
      </h4> */}
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Tu nombre" className="input__contact" />
        <input
          type="text"
          placeholder="Tu correo electrónico"
          className="input__contact"
        />
      </div>
      <input type="text" placeholder="Asunto" className="input__contact" />
      <textarea
        placeholder="Mensaje"
        className="input__contact min-h-[10rem] max-h-[12rem]"
      ></textarea>

      <button
        type="submit"
        className="w-52 flex items-center justify-center gap-2 bg__orange text-white py-3 rounded-full font-medium button__submit transition-all duration-500 ease-in-out"
      >
        <BsFillSendFill /> Enviar Mensaje
      </button>
    </form>
  );
};
