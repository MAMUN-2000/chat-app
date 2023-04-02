import Message from "./Message";
import { useSelector } from "react-redux";

export default function Messages({ msg = [] }) {
  const {
    user: { email },
  } = useSelector((state) => state.auth);

  // decide what to render
  let content = msg.map((item) => {
    let { message, sender } = item;
    const justify = sender.email !== email ? "start" : "end";
    return <Message justify={justify} message={message} key={item.id} />;
  });

  return (
    <div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse">
      <ul className="space-y-2">{content}</ul>
    </div>
  );
}
