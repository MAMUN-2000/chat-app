import gravatarUrl from "gravatar-url";
import { useSelector } from "react-redux";

export default function ChatHead({ msg: { sender, receiver } }) {
  const {
    user: { email },
  } = useSelector((s) => s.auth);

  const partner = sender.email === email ? receiver : sender;
  console.log(partner);
  return (
    <div className="relative flex items-center p-3 border-b border-gray-300">
      <img
        className="object-cover w-10 h-10 rounded-full"
        src={gravatarUrl(partner.email)}
        alt="img"
      />
      <span className="block ml-2 font-bold text-gray-600">{partner.name}</span>
    </div>
  );
}
