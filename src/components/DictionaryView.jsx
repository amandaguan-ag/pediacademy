import { Box, Container, VStack, Input, Text, Spinner, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function DictionaryView() {
  const [term, setTerm] = useState("");
  const [simplifiedDefinition, setSimplifiedDefinition] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSimplify = async () => {
    if (!term.trim()) {
      setSimplifiedDefinition("Please enter a term to explain.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `You are a friendly diabetes educator for children. Your task is to:
              1. Explain diabetes-related medical terms in simple, child-friendly language (aimed at ages 8-12)
              2. Use analogies that children can understand
              3. Keep explanations short (2-3 sentences maximum)
              4. Always maintain medical accuracy while being simple
              5. If the term isn't related to diabetes, kindly explain that and suggest looking up a medical dictionary instead`
            },
            {
              role: "user",
              content: `Please explain this medical term in simple words: ${term}`
            }
          ],
          temperature: 0.7,
          max_tokens: 150
        })
      });
      
      const data = await response.json();
      setSimplifiedDefinition(data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
      setSimplifiedDefinition("Sorry, I couldn't get the definition right now. Please try again later.");
    }
    setIsLoading(false);
  };

  return (
    <Box p={8}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">Diabetes Dictionary</Text>
          <Text color="gray.600">
            Enter any diabetes-related term, and I'll explain it in simple words!
          </Text>
          <Input
            placeholder="Enter a medical term (e.g., insulin, glucose)..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            size="lg"
          />
          <Button 
            onClick={handleSimplify}
            colorScheme="blue"
            isLoading={isLoading}
            size="lg"
          >
            Explain This Term
          </Button>
          
          {isLoading && <Spinner />}
          
          {simplifiedDefinition && (
            <Box p={6} bg="gray.100" borderRadius="lg" mt={4}>
              <Text fontSize="lg">{simplifiedDefinition}</Text>
            </Box>
          )}
        </VStack>
      </Container>
    </Box>
  );
}