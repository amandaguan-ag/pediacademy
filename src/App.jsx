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
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <Router>
      <Box display="flex">
        <Sidebar />
        <Box ml="200px" width="full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/module/:moduleId" element={<ModuleOverview />} />
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

function Dashboard() {
  return (
    <Box my={10}>
      <Container maxW="container.xl" >
        {/* Intro Section */}
        <Box mb={8}>
          <Heading>Welcome to Pediacademy!</Heading>
          <Card title="Create your child's  Medical ID">Ensures quick access to your child’s condition, medication, and emergency contacts. Save it to their lock screen so it can be accessed without unlocking the phone. 
            <Button>Start</Button>
          </Card>
        </Box>

        {/* Parent Training Section */}
        <Box mb={8}>
          <Heading size="lg">Parent training</Heading>
          <SimpleGrid columns={3} spacing={4} gap="40px">
            <ModuleCard title="Placeholder">Placeholder description blah blah</ModuleCard>
            <ModuleCard title="Placeholder">Placeholder description blah blah</ModuleCard>
            <ModuleCard title="Placeholder">Placeholder description blah blah</ModuleCard>
          </SimpleGrid>
        </Box>

        {/* Child Training Section */}
        <Box mb={8}>
          <Heading size="lg">Child training</Heading>
          <SimpleGrid columns={3} spacing={4} gap="40px">
            {childModules.map((module) => (
              <ModuleCard 
                key={module.id}
                moduleId={module.id}
                title={module.title}
                description={module.description}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
