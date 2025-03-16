import { Box, Container, Grid, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import ModuleCard from "./components/ModuleCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModuleOverview from "./components/ModuleOverview";
import { childModules } from './data/modules';
import LessonView from "./components/LessonView";
import MessagePage from "./components/MessagePage";
import FlashcardView from "./components/FlashcardView";
import ModuleCompletion from "./components/ModuleCompletion";
import DictionaryView from "./components/DictionaryView";

function App() {
  return (
    <Router>
      <Box display="flex">
        <Sidebar />
        <Box ml="200px" width="full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/module/:moduleId" element={<ModuleOverview />} />
            <Route path="/dictionary" element={<DictionaryView />} />
            <Route path="/module/:moduleId/lesson/:lessonId" element={<LessonView />} />
            <Route path="/module/:moduleId/lesson/:lessonId/complete" element={<MessagePage />} />
            <Route path="/module/:moduleId/lesson/:lessonId/flashcards" element={<FlashcardView />} />
            <Route path="/module/:moduleId/lesson/:lessonId/completion" element={<ModuleCompletion />} />=
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

// Move your current App content to a new Dashboard component
function Dashboard() {
  return (
    <Box p={8}>
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
            {childModules.map((module) => (
              <ModuleCard 
                key={module.id}
                moduleId={module.id}
                title={module.title}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
