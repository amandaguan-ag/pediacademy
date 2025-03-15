import { Box, Container, VStack, Text, Button, Heading } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

export default function MessagePage() {
  const navigate = useNavigate();
  const { moduleId } = useParams();

  const handleContinue = () => {
    navigate(`/module/${moduleId}`);
  };

  return (
    <Box p={8}>
      <Container maxW="container.xl">
        <VStack 
          spacing={8} 
          align="center" 
          bg="gray.100" 
          p={8} 
          borderRadius="lg"
          minH="400px"
          justify="center"
        >
            <Heading fontSize="2xl" textAlign="center">Knowledge Test</Heading>
          <Text fontSize="xl" textAlign="center">
          You have finished the learning portion of this module. We will now continue to the knowledge testing part.
          </Text>
          <Button
            colorScheme="blue"
            size="lg"
            onClick={handleContinue}
          >
            Continue
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
