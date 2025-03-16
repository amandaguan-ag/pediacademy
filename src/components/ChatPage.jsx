import { useState } from "react";
import { Box, Container, Heading, VStack, Input, Text, HStack } from "@chakra-ui/react";
import Button from "./Button";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessages([...messages, { text: messageInput, sender: "User" }]);
      setMessageInput("");
    }
  };

  return (
    <Box my={10}>
      <Container maxW="container.xl">
        <Heading mb={6}>Ask anything</Heading>
        <VStack height="82vh" align="stretch">
          {/* Chat Messages */}
          <Box 
            borderRadius="xl"
            height="88%" 
            overflowY="scroll"
          >
            {messages.map((message, index) => (
              <HStack key={index} spacing={4} alignSelf={message.sender === "User" ? "flex-end" : "flex-start"}>
                <Box
                  bg={message.sender === "User" ? "#557EC0" : "gray.300"}
                  color={message.sender === "User" ? "white" : "black"}
                  borderRadius="xl"
                  p={2}
                  px={4}
                  mb={4}
                  maxWidth="50%"
                  wordBreak="break-word"
                >
                  <Text>{message.text}</Text>
                </Box>
              </HStack>
            ))}
          </Box>

          {/* Input Section */}
          <HStack>
            <Input 
              placeholder="Your message..." 
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              size="xl"
              borderRadius="xl"
            />
            <Button onClick={handleSendMessage}>Send</Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}