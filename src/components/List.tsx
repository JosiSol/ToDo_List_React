import Tick from "../assets/check.png";
import Nontick from "../assets/oval.png";

interface Props {
  text: string | null;
  id: number;
  status: boolean;
  del: (id: number) => void;
  toggle: (id: number) => void;
  edit: (id: number) => void;
}

const List = ({ text, id, status, del, toggle, edit }: Props) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={status ? Tick : Nontick} className="w-7 flex" />
        <p
          className={`text-slate-700 ml-4 text-[16px]  ${
            status ? "line-through decoration-slate-500" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <p
        onClick={() => {
          edit(id);
        }}
        className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-300 rotate-90"
      >
        &#9999;
      </p>
      <p
        onClick={() => {
          del(id);
        }}
        className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-300"
      >
        &#215;
      </p>
    </div>
  );
};

export default List;
