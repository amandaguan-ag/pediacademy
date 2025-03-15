import { Box, Container, Grid, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import ModuleCard from "./components/ModuleCard";

function App() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box ml="200px" p={8} width="full">
        <Container maxW="container.xl">
          <Heading mb={8}>Dashboard</Heading>

          {/* Intro Section */}
          <Box 
            bg="gray.100" 
            p={6} 
            mb={8}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="xl">Intro, child info</Text>
            <Text fontSize="xl">›</Text>
          </Box>

          {/* Parent Training Section */}
          <Box mb={8}>
            <Heading size="lg" mb={4}>Parent training</Heading>
            <SimpleGrid columns={3} spacing={4} gap="40px">
              <ModuleCard title="Placeholder" />
              <ModuleCard title="Placeholder" />
              <ModuleCard title="Placeholder" />
            </SimpleGrid>
          </Box>

          {/* Child Training Section */}
          <Box mb={8}>
            <Heading size="lg" mb={4}>Child training</Heading>
            <SimpleGrid columns={3} spacing={4} gap="40px">
              <ModuleCard title="Diabetes Basics" />
              <ModuleCard title="Daily Management" />
              <ModuleCard title="Food & Nutrition" />
              <ModuleCard title="Emergency Preparedness" />
              <ModuleCard title="Exercise & Activity" />
              <ModuleCard title="School & Daily Life Support" />
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
