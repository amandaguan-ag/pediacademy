import { Box, Text, Stack, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ModuleCard({ title, description, moduleId, children, color, icolor, icon: IconComponent, ...props }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/module/${moduleId}`);
  };

  return (
    <Box
      bg={color}
      p={6}
      my={6}
      display="flex"
      borderRadius="xl"
      boxShadow="sm"
      cursor="pointer"
      onClick={handleClick}
      _hover={{
        transform: "translateY(-2px)",
        transition: "all 0.2s ease-in-out"
      }}
      {...props}
    >
      <Stack
        spacing={2}
        align="left"
      >
        {IconComponent && (
          <Box mb={4}>
            <Icon as={IconComponent} boxSize={8} color={icolor} />
          </Box>
        )}
        <Text>
          {description}
          {children}
        </Text>
      </Stack>
    </Box>
  );
}
