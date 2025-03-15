import { Box, Container, VStack, Text, Button, Flex, Icon, HStack } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiStar, FiChevronLeft, FiChevronRight, FiMaximize, FiShuffle } from "react-icons/fi";

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
        <VStack spacing={8}>
          <Flex w="full" justify="space-between" align="center">
            <Text fontSize="2xl">Flashcards</Text>
            <Icon
              as={FiStar}
              variant="ghost"
            />
          </Flex>

          <Flex w="full" align="center" gap={4}>
            <Icon
              as={FiChevronLeft}
              onClick={handlePrevious}
              cursor={currentIndex === 0 ? "not-allowed" : "pointer"}
              opacity={currentIndex === 0 ? 0.4 : 1}
              boxSize={8}
              color="white"
              bg="black"
              p={1}
              borderRadius="md"
              _hover={{ bg: "gray.800" }}
            />
            
            <Box
              flex="1"
              h="400px"
              bg="white"
              borderRadius="lg"
              boxShadow="md"
              p={8}
              cursor="pointer"
              onClick={() => setIsFlipped(!isFlipped)}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="xl" textAlign="center">
                {isFlipped ? cards[currentIndex]?.definition : cards[currentIndex]?.term}
              </Text>
            </Box>

            <Icon
              as={FiChevronRight}
              onClick={handleNext}
              cursor={currentIndex === totalCards - 1 ? "not-allowed" : "pointer"}
              opacity={currentIndex === totalCards - 1 ? 0.4 : 1}
              boxSize={8}
              color="white"
              bg="black"
              p={1}
              borderRadius="md"
              _hover={{ bg: "gray.800" }}
            />
          </Flex>

          <HStack spacing={4} w="full" justify="space-evenly">
            <Button leftIcon={<FiShuffle />} onClick={handleShuffle}>
              Shuffle
            </Button>
            <Text>{`${currentIndex + 1}/${totalCards}`}</Text>
            <Button rightIcon={<FiMaximize />} onClick={handleFullscreen}>
              Fullscreen
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}