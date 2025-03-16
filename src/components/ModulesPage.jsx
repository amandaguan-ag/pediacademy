import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import ModuleCard from "./ModuleCard";
import { childModules } from '../data/modules';

export default function ModulesPage() {
  return (
    <Box my={10}>
      <Container maxW="container.xl">
        <Heading>Available Modules</Heading>
        <SimpleGrid columns={3} gap="40px">
          {childModules.map((module) => (
            <ModuleCard 
              key={module.id}
              moduleId={module.id}
              title={module.title}
              description={module.description}
              mb={-6}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
