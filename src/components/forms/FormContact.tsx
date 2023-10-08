import { BsFillSendFill } from "react-icons/bs";

export const FormContact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 form__group">
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
        className="w-52 flex items-center justify-center gap-2 mb-5 sm:mb-0 bg__orange text-white py-3 rounded-full font-medium button__submit transition-all duration-500 ease-in-out"
      >
        <BsFillSendFill /> Enviar Mensaje
      </button>
    </form>
  );
};
