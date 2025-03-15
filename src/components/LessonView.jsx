import { Box, Container, Heading, Text, VStack, Button, Image, Flex } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { childModules } from "../data/modules";

export default function LessonView() {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  
  const module = childModules.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);

  if (!module || !lesson) {
    return <Box p={8}>Lesson not found</Box>;
  }

  const handleBack = () => {
    navigate(`/module/${moduleId}`);
  };

  const handleNext = () => {
    navigate(`/module/${moduleId}/lesson/${lessonId}/complete`);
  };

  // Dynamic image imports
  const getImagePaths = () => {
    try {
      const formattedModuleId = moduleId.replace(/-/g, '-');
      const formattedLessonId = lessonId.replace(/-/g, '-');
      
      if (moduleId === 'diabetes-basics' && lessonId === 'what-is-diabetes') {
        return [
          `/src/assets/01-${formattedModuleId}/01-${formattedLessonId}/1.png`,
          `/src/assets/01-${formattedModuleId}/01-${formattedLessonId}/2.png`
        ];
      }
      return [];
    } catch (error) {
      console.warn(`Images not found for module: ${moduleId}, lesson: ${lessonId}`);
      return [];
    }
  };

  const imagePaths = getImagePaths();

  return (
    <Box p={8}>
      <Container maxW="container.xl">
        <Button mb={4} onClick={handleBack} variant="ghost">
          ← Back to Module
        </Button>
        
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading size="lg" mb={2}>{lesson.title}</Heading>
            <Text color="gray.600">Duration: {lesson.duration}</Text>
          </Box>

          <Box position="relative">
            {imagePaths.length > 0 ? (
              <VStack spacing={8} align="center">
                {imagePaths.map((path, index) => (
                  <Image 
                    key={index}
                    src={path}
                    alt={`Lesson image ${index + 1}`}
                    borderRadius="lg"
                    maxW="800px"
                    fallback={<Box p={8} bg="gray.100" borderRadius="lg">Image not available</Box>}
                  />
                ))}
              </VStack>
            ) : (
              <Box bg="gray.100" p={8} borderRadius="lg">
                <Text>Lesson content will go here</Text>
              </Box>
            )}
            
            {imagePaths.length > 0 && (
              <Flex justify="flex-end" mt={4}>
                <Button
                  colorScheme="blue"
                  onClick={handleNext}
                  size="lg"
                >
                  Next
                </Button>
              </Flex>
            )}
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
