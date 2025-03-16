import { Box, Text, Stack } from "@chakra-ui/react";

export default function Card({ title, children, ...props }) {

  return (
    <Box
      bg="#ECEFF6"
      p={6}
      my={6}
      display="flex"
      borderRadius="xl"
      boxShadow="sm"
      {...props}
    >
      <Stack gap={4}>
        <Text fontSize="lg" fontWeight="semibold" textAlign="left">{title}</Text>
        {children}
      </Stack>
    </Box>
  );
}
