import { Button } from "@chakra-ui/react";

export default function Card({ children }) {

  return (
    <Button
      bg="#557EC0"
      borderRadius="xl"
      width="max-content"
      px={20}
    >
      {children}
    </Button>
  );
}
