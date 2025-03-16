import { Box, Container, Stack, Text, Button, Heading } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBackRounded } from "@mui/icons-material";

export default function MessagePage() {
  const navigate = useNavigate();
  const { moduleId, lessonId } = useParams();

  const handleContinue = () => {
    navigate(`/module/${moduleId}/lesson/${lessonId}/flashcards`);
  };

  const handleBackToLesson = () => {
    navigate(`/module/${moduleId}/lesson/${lessonId}`);
  };

  return (
    <Box p={8}>
      <Container maxW="container.xl">
        <Button mb={6} px={0} onClick={handleBackToLesson} variant="ghost">
          <ArrowBackRounded />
          Back to Lesson
        </Button>
        <Stack
          spaceY={4}
          bg="#ECEFF6"
          _dark={{ bg: "gray.800" }}
          p={8}
          borderRadius="xl"
        >
          <Heading
            fontSize="lg"
            _dark={{ color: "gray.100" }}
          >
            Knowledge Test
          </Heading>
          <Text
            _dark={{ color: "gray.200" }}
          >
            Congratulations! You have finished the reading for this module. Continue to test your knowledge of the lesson material.
          </Text>
          <Button
            bg="#557EC0"
            borderRadius="xl"
            width="max-content"
            px={20}
            onClick={handleContinue}
            size="lg"
          >
            Continue
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
