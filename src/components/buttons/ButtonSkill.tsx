import { IconType } from "react-icons";

interface PropsButtons {
  Icon: IconType;
  text: string;
}

export const ButtonSkill = ({ Icon, text }: PropsButtons) => {
  return (
    <button className="w-full sm:w-40 flex items-center justify-center gap-2 py-2.5 rounded-lg border-2 border-gray-100 text-gray-100 hover:bg-gray-100 transition-colors duration-500 ease-in-out hover:text-gray-700">
      <Icon /> {text}
    </button>
  );
};
