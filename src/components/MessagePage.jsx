import { Box, Container, VStack, Text, Button, Heading } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

export default function MessagePage() {
  const navigate = useNavigate();
  const { moduleId, lessonId } = useParams();

  const handleContinue = () => {
    navigate(`/module/${moduleId}/lesson/${lessonId}/flashcards`);
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
            Knowledge Test
          </Heading>
          <Text 
            fontSize="xl" 
            textAlign="center"
            color="gray.800"
            _dark={{ color: "gray.200" }}
          >
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
