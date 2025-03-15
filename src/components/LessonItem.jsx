import { Box, Text, HStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LessonItem({ lesson, moduleId }) {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(`/module/${moduleId}/lesson/${lesson.id}`);
  };

  return (
    <Box 
      p={4}
      bg="white"
      borderRadius="md"
      boxShadow="sm"
    >
      <HStack justify="space-between" align="center">
        <Box>
          <Text fontWeight="medium">{lesson.title}</Text>
          <Text fontSize="sm" color="gray.600">{lesson.duration}</Text>
        </Box>
        <Button
          onClick={handleStart}
          size="sm"
          colorScheme="blue"
        >
          Start
        </Button>
      </HStack>
    </Box>
  );
}
