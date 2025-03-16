import { Box, Container, VStack, Text, Button, Flex, Icon, HStack, Textarea } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ShuffleRounded, FullscreenRounded, StarBorderRounded, ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";

const flashcardData = {
  'diabetes-basics': {
    'what-is-diabetes': [
      { term: 'Glucose', definition: 'A type of sugar in your blood that gives your body energy' },
      { term: 'Insulin', definition: 'A hormone that helps glucose enter your body\'s cells' },
      { term: 'Blood Sugar', definition: 'The amount of glucose present in your blood' },
      { term: 'Type 1 Diabetes', definition: 'A condition where your body doesn\'t make insulin' },
      { term: 'Type 2 Diabetes', definition: 'A condition where your body doesn\'t use insulin well' },
      { term: 'Pancreas', definition: 'The organ that makes insulin in your body' },
      { term: 'Hyperglycemia', definition: 'When blood sugar is too high' },
      { term: 'Hypoglycemia', definition: 'When blood sugar is too low' },
      { term: 'Blood Glucose Meter', definition: 'A device that measures how much sugar is in your blood' },
      { term: 'Glucie', definition: 'Your friendly glucose helper who travels through your blood vessels' }
    ]
  }
};

// Add simple feedback collection
const FeedbackWidget = () => {
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Simple analytics logging
    console.log({
      lessonId,
      moduleId,
      rating,
      feedback,
      timestamp: new Date(),
    });
    // Future: Send to backend
  };

  return (
    <VStack spacing={4} mt={8} p={4} bg="gray.50" borderRadius="md">
      <Text>How helpful was this lesson?</Text>
      <HStack>
        {[1, 2, 3, 4, 5].map((value) => (
          <Button
            key={value}
            onClick={() => setRating(value)}
            colorScheme={rating === value ? "blue" : "gray"}
          >
            {value}
          </Button>
        ))}
      </HStack>
      {rating && (
        <>
          <Textarea
            placeholder="Any suggestions for improvement?"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <Button onClick={handleSubmit}>Submit Feedback</Button>
        </>
      )}
    </VStack>
  );
};

export default function FlashcardView() {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const cards = flashcardData[moduleId]?.[lessonId] || [];
  const totalCards = cards.length;

  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      navigate(`/module/${moduleId}/lesson/${lessonId}/completion`);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleShuffle = () => {
    // Implement shuffle functionality
  };

  const handleFullscreen = () => {
    // Implement fullscreen functionality
  };

  return (
    <Box p={8}>
      <Container maxW="container.xl">
        <VStack spaceY={6}>
          <Flex w="full" justify="space-between" align="center">
            <Text fontWeight='semibold' fontSize="lg">Lesson Flashcards</Text>
          </Flex>

          <Flex w="full" align="center" gap={4}>
            
            <Box
              flex="1"
              h="500px"
              bg="#ECEFF6"
              _dark={{ bg: "gray.800" }}
              borderRadius="xl"
              p={2}
              cursor="pointer"
              onClick={() => setIsFlipped(!isFlipped)}
              position="relative"
            >
              <Icon
                as={StarBorderRounded}
                position="absolute"
                top={6}
                right={6}
                boxSize={8}
                color="gray.500"
                cursor="pointer"
                _hover={{ color: "#85B0DE" }}
              />
              <Flex h="full" align="center" justify="space-between" px={8}>
                <Icon
                  as={ChevronLeftRounded}
                  onClick={handlePrevious}
                  cursor={currentIndex === 0 ? "not-allowed" : "pointer"}
                  opacity={currentIndex === 0 ? 0.4 : 1}
                  boxSize={8}
                  color="white"
                  bg="#557EC0"
                  p={1}
                  borderRadius="md"
                  _hover={currentIndex === 0 ? { bg: "#557EC0" } : { bg: "#85B0DE" }}
                />
                <Text 
                  fontWeight={isFlipped ? "" : "semibold"}
                  fontSize="2xl" 
                  textAlign="center"
                  _dark={{ color: "gray.100" }}
                  p={8}
                  borderRadius="md"
                  flex="1"
                  mx={8}
                  h="250px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {isFlipped ? cards[currentIndex]?.definition : cards[currentIndex]?.term}
                </Text>
                <Icon
                  as={ChevronRightRounded}
                  onClick={handleNext}
                  cursor={currentIndex === totalCards - 1 ? "not-allowed" : "pointer"}
                  opacity={currentIndex === totalCards - 1 ? 0.4 : 1}
                  boxSize={8}
                  color="white"
                  bg="#557EC0"
                  p={1}
                  borderRadius="md"
                  _hover={currentIndex === totalCards - 1 ? { bg: "#557EC0" } : { bg: "#85B0DE" }}
                />
              </Flex>
            </Box>


          </Flex>

          <HStack w="full" justify="space-between">
            <Button onClick={handleShuffle} variant="ghost">
              <ShuffleRounded />
            </Button>
            <Text fontSize="xl">{`${currentIndex + 1}/${totalCards}`}</Text>
            <Button onClick={handleFullscreen} variant="ghost">
              <FullscreenRounded />
            </Button>
          </HStack>

          <FeedbackWidget />
        </VStack>
      </Container>
    </Box>
  );
}