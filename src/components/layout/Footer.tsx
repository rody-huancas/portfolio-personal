import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
  RiLinkedinFill,
} from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-3">
      <div className="flex items-center justify-center gap-3">
        <a
          href="https://www.facebook.com/rody.huancaschuquipoma.7"
          target="_blank"
          className="rounded-full p-2 cursor-pointer social__item"
        >
          <RiFacebookFill />
        </a>
        <a
          href="https://www.instagram.com/rody.huancas/"
          target="_blank"
          className="rounded-full p-2  cursor-pointer social__item"
        >
          <RiInstagramLine />
        </a>
        <a
          href="https://twitter.com/rodyhuancas"
          target="_blank"
          className="rounded-full p-2 cursor-pointer social__item"
        >
          <RiTwitterXLine />
        </a>
        <a
          href="https://www.linkedin.com/in/rody-huancas/"
          target="_blank"
          className="rounded-full p-2 cursor-pointer social__item"
        >
          <RiLinkedinFill />
        </a>
      </div>

      <p className="text-center text-xs">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://github.com/rody-huancas"
          target="_blank"
          className="uppercase font-medium hover:underline"
        >
          Rody
        </a>
      </p>
    </footer>
  );
};
