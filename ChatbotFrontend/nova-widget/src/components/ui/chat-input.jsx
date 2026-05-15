import { PromptInput, PromptInputBody, PromptInputTextarea, PromptInputFooter, PromptInputTools, PromptInputSubmit } from "../ai/prompt-input";

export function ChatInput() {
  return (
    <PromptInput
      onSubmit={(message) => {
        console.log("Submitting:", message);
      }}
    >
      <PromptInputBody>
        <PromptInputTextarea  />
      </PromptInputBody>
      <PromptInputFooter>
        <PromptInputTools />
        <PromptInputSubmit />
      </PromptInputFooter>
    </PromptInput>
  )
}
