import { Box, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ModuleCard({ title, moduleId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/module/${moduleId}`);
  };

  return (
    <Box
      bg="gray.100"
      _dark={{ 
        bg: "gray.700",
        _hover: { bg: "gray.600" }
      }}
      p={6}
      cursor="pointer"
      onClick={handleClick}
      _hover={{ 
        bg: "gray.200",
        transform: "translateY(-2px)",
        transition: "all 0.2s ease-in-out"
      }}
      height="200px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="lg"
      boxShadow="sm"
    >
      <VStack spacing={2}>
        <Text 
          fontSize="xl" 
          fontWeight="bold" 
          textAlign="center"
          color="gray.800"
          _dark={{ color: "gray.100" }}
        >
          {title}
        </Text>
        <Text 
          fontSize="sm" 
          color="gray.600"
          _dark={{ color: "gray.300" }}
        >
          Click to explore levels
        </Text>
      </VStack>
    </Box>
  );
}
