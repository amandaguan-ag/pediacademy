import { Box, Container, Stack, Text, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ModuleCompletion() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Box p={8}>
      <Container maxW="container.xl">
        <Stack
          spaceY={4}
          bg="#ECEFF6"
          _dark={{ bg: "gray.800" }}
          p={8}
          borderRadius="xl"
        >
          <Heading fontSize="lg" _dark={{ color: "gray.100" }}>
            Module Completion
          </Heading>
          <Text fontSize="md" _dark={{ color: "gray.200" }}>
            Congratulations! You have finished the module.
          </Text>
          <Button
            bg="#557EC0"
            borderRadius="xl"
            width="max-content"
            px={20}
            onClick={handleBackToHome}
            size="lg"
          >
            Back to Home
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
