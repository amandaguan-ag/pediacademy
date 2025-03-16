import { Box, Container, VStack, Text, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ModuleCompletion() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Box p={8}>
      <Container maxW="container.xl">
        <VStack 
          spacing={8} 
          align="center" 
          bg="gray.200"
          _dark={{ bg: "gray.800" }}
          p={8} 
          borderRadius="lg"
          minH="400px"
          justify="center"
        >
          <Heading 
            fontSize="2xl" 
            textAlign="center"
            color="gray.900"
            _dark={{ color: "gray.100" }}
          >
            Module Completion
          </Heading>
          <Text 
            fontSize="xl" 
            textAlign="center"
            color="gray.800"
            _dark={{ color: "gray.200" }}
          >
            Congrats! You finished the module
          </Text>
          <Text 
            fontSize="lg" 
            textAlign="center" 
            color="gray.700"
            _dark={{ color: "gray.300" }}
          >
            Score + AI suggestions
          </Text>
          <Button
            colorScheme="gray"
            size="lg"
            onClick={handleBackToHome}
          >
            Back to home
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
