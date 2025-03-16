import { Box, Text, HStack } from "@chakra-ui/react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function LessonItem({ lesson, moduleId }) {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(`/module/${moduleId}/lesson/${lesson.id}`);
  };

  return (
    <Box 
      p={4}
      bg='#ECEFF6'
      _dark={{ bg: "gray.800" }}
      borderRadius="xl"
    >
      <HStack justify="space-between" align="center">
        <Box>
          <Text 
            fontWeight="semibold"
            _dark={{ color: "gray.100" }}
          >
            {lesson.title}
          </Text>
          <Text 
            fontSize="sm" 
            _dark={{ color: "gray.300" }}
          >
            {lesson.duration}
          </Text>
        </Box>
        <Button
          onClick={handleStart}
        >
          Start
        </Button>
      </HStack>
    </Box>
  );
}
