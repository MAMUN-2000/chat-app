import { useSelector } from "react-redux";
import { useGetconversationQuery } from "../../features/conversation/conversationAPI";
import ChatItem from "./ChatItem";
import moment from "moment";
import getPartnarInfo from "../../util/getPartnerInfo";
import gravatarUrl from "gravatar-url";

export default function ChatItems() {
  const { user } = useSelector((state) => state.auth);
  const {
    data: conversations,
    isError,
    isLoading,
  } = useGetconversationQuery({
    email: user?.email,
  });
  // console.log(conversations);
  // decide what to render
  let content;
  if (!isError && !isLoading && conversations?.length > 0) {
    content = conversations.map((conversation) => {
      const { message, timestamp, users, id } = conversation;
      const { name, email } = getPartnarInfo(users, user.email);
      return (
        <li key={conversation.id}>
          <ChatItem
            id={id}
            avatar={gravatarUrl(email)}
            name={name}
            lastMessage={message}
            lastTime={moment(timestamp).fromNow()}
          />
        </li>
      );
    });
  }

  return <ul>{content}</ul>;
}
