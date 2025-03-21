import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { childModules } from "../data/modules";
import LessonItem from "./LessonItem";

export default function ModuleOverview() {
  const { moduleId } = useParams();
  const module = childModules.find(m => m.id === moduleId);

  if (!module) {
    return <Box p={8}>Module not found</Box>;
  }

  return (
    <Box p={8}>
      <Container maxW="container.xl">
        <Heading 
          mb={8}
          _dark={{ color: "gray.50" }}
        >
          Module Overview
        </Heading>
        
        <Box 
          bg="#ECEFF6" 
          _dark={{ bg: "gray.700" }}
          p={8} 
          borderRadius="xl"
          mb={8}
        >
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading 
                size="md" 
                mb={4}
                _dark={{ color: "gray.50" }}
              >
                Summary
              </Heading>
              <Text
                _dark={{ color: "gray.100" }}
              >
                {module.description}
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box>
              <VStack spaceY={4} align="stretch">
                {module.lessons.map((lesson, index) => (
                  <LessonItem 
                    key={index}
                    lesson={lesson}
                    moduleId={moduleId}
                  />
                ))}
              </VStack>
            </Box>
      </Container>
    </Box>
  );
}
