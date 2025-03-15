import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import { childModules } from '../data/modules';

export default function ModuleOverview() {
  const { moduleId } = useParams();
  const module = childModules.find(m => m.id === moduleId);

  if (!module) {
    return <Box p={8}>Module not found</Box>;
  }

  return (
    <Box display="flex">
      <Box ml="200px" p={8} width="full">
        <Container maxW="container.xl">
          <Heading mb={8}>Module Overview</Heading>
          
          <Box 
            bg="gray.100" 
            p={8} 
            borderRadius="lg"
            mb={8}
          >
            <VStack spacing={8} align="stretch">
              {/* Description Section */}
              <Box>
                <Heading size="md" mb={4}>Description</Heading>
                <Text>{module.description}</Text>
              </Box>

              {/* Lessons Section */}
              <Box>
                <VStack spacing={4} align="stretch">
                  {module.lessons.map((lesson, index) => (
                    <Box 
                      key={index}
                      p={4}
                      bg="white"
                      borderRadius="md"
                      boxShadow="sm"
                    >
                      <Text>{lesson.title} - {lesson.duration}</Text>
                    </Box>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </Box>

          {/* Start Button */}
          <Box display="flex" justifyContent="flex-end">
            <Button
              size="lg"
              bg="gray.200"
              _hover={{ bg: "gray.300" }}
              px={8}
            >
              Start
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
