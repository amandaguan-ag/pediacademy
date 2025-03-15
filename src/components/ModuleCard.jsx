import { Box, Text } from "@chakra-ui/react";

export default function ModuleCard({ title }) {
  return (
    <Box
      bg="gray.100"
      p={6}
      cursor="pointer"
      _hover={{ bg: "gray.200" }}
      height="200px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="xl">{title}</Text>
    </Box>
  );
}
