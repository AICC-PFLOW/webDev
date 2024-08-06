// src/ActionProvider.js
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
  }

  handleHello = () => {
      const message = this.createChatBotMessage("안녕하세요! 어떻게 도와드릴까요?");
      this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
      }));
  };

  handleGoodbye = () => {
      const message = this.createChatBotMessage("안녕히 가세요!");
      this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
      }));
  };

  // 추가적인 메서드를 정의할 수 있습니다.
  handleCustomAction = (text) => {
      const message = this.createChatBotMessage(text);
      this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
      }));
  };
}

export default ActionProvider;
