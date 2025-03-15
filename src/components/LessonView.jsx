import { Box, Container, Heading, Text, VStack, Button, Image } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { childModules } from "../data/modules";

// Import images
import image1 from "../assets/01-diabetes-basics/01-what-is-diabetes/1.png";
import image2 from "../assets/01-diabetes-basics/01-what-is-diabetes/2.png";

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

  // Only show images for this specific lesson
  const isWhatIsDiabetesLesson = moduleId === 'diabetes-basics' && lessonId === 'what-is-diabetes';

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

          {isWhatIsDiabetesLesson ? (
            <VStack spacing={8} align="center">
              <Image 
                src={image1} 
                alt="Comic Introducing to Glucie and blood vessels of Tommy"
                borderRadius="lg"
                maxW="800px"
              />
              <Image 
                src={image2} 
                alt="Comic introducing blood vassel traffic jam"
                borderRadius="lg"
                maxW="800px"
              />
            </VStack>
          ) : (
            <Box bg="gray.100" p={8} borderRadius="lg">
              <Text>Lesson content will go here</Text>
            </Box>
          )}
        </VStack>
      </Container>
    </Box>
  );
}
