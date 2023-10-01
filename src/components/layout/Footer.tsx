import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
  RiLinkedinFill,
} from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-5">
      <div className="flex items-center justify-center gap-3">
        <a
          href=""
          target="_blank"
          className="rounded-full p-2 cursor-pointer social__item"
        >
          <RiFacebookFill />
        </a>
        <a
          href=""
          target="_blank"
          className="rounded-full p-2  cursor-pointer social__item"
        >
          <RiInstagramLine />
        </a>
        <a
          href=""
          target="_blank"
          className="rounded-full p-2 cursor-pointer social__item"
        >
          <RiTwitterXLine />
        </a>
        <a
          href=""
          target="_blank"
          className="rounded-full p-2 cursor-pointer social__item"
        >
          <RiLinkedinFill />
        </a>
      </div>

      <p className="text-center">
        Todos los derechos reservados {new Date().getFullYear()}
      </p>
    </footer>
  );
};
