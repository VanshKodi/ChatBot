import { FIRST_MESSAGE } from "../../constants"
import { ChatInput } from "./chat-input"

export default function ChatBody() {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "20px", color: "#0F2D52" }}>
      </div>
      <div style={{ flexShrink: 0, padding: "0 12px 12px" }}>
        <ChatInput />
      </div>
    </div>
  )
}
