import { Box, Text, VStack } from "@chakra-ui/react";

export default function ModuleCard({ title }) {
  return (
    <Box
      bg="gray.100"
      p={6}
      cursor="pointer"
      _hover={{ 
        bg: "gray.200",
        transform: "translateY(-2px)",
        transition: "all 0.2s ease-in-out"
      }}
      height="200px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="sm"
    >
      <VStack spacing={2}>
        <Text fontSize="xl" fontWeight="bold" textAlign="center">{title}</Text>
        <Text fontSize="sm" color="gray.600">Click to explore levels</Text>
      </VStack>
    </Box>
  );
}
