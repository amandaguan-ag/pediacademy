import Card from "./Card";
import { Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ModuleCard({ title, description, moduleId, children, ...props }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/module/${moduleId}`);
  };

  return (
    <Card
      title={title} 
      cursor="pointer" 
      onClick={handleClick}
      _hover={{ 
        transform: "translateY(-2px)", 
        transition: "all 0.2s ease-in-out"
      }}
      {...props}
    >
      <VStack 
        spacing={2} 
        align="center"
      >
        <Text>
          {description}
          {children}
        </Text>
      </VStack>
    </Card>
  );
}
