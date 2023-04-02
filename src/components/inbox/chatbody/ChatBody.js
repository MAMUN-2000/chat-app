import { useParams } from "react-router-dom";
import { useGetMessagesQuery } from "../../../features/messages/messagesAPI";
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import Options from "./Options";

export default function ChatBody() {
  const { id } = useParams();
  const { data: messages, isError, isLoading } = useGetMessagesQuery({ id });

  // decide what to render
  let content;

  if (!isLoading && !isError && messages?.length > 0) {
    content = (
      <div className="w-full lg:col-span-2 lg:block">
        <div className="w-full grid conversation-row-grid">
          <ChatHead msg={messages[0]} />
          <Messages msg={messages} />
          <Options />
        </div>
      </div>
    );
  }

  return content;
}
