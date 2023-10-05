import { IconType } from "react-icons";

interface PropsButtons {
  Icon: IconType;
  text: string;
}

export const ButtonSkill = ({ Icon, text }: PropsButtons) => {
  return (
    <button className="w-36 sm:w-40 flex items-center justify-center gap-2 py-2.5 rounded-lg border-2 border-gray-600 text-gray-700 hover:bg-gray-600 transition-colors duration-500 ease-in-out hover:text-white">
      <Icon /> {text}
    </button>
  );
};
