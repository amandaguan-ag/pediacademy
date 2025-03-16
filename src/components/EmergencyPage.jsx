import { Box, Container, Grid, Heading, SimpleGrid, Text, Link } from "@chakra-ui/react";
import EmergencyResourceCard from "./EmergencyResourceCard";
import Button from "./Button";

function EmergencyPage() {
  return (
    <Box my={10}>
      <Container maxW="container.xl">
        {/* Intro Section */}
        <Box mb={8}>
          <Heading>Emergency Resources</Heading>
          <Text fontSize="lg">
            Here you'll find important resources for emergencies. Please make sure to familiarize yourself with these contacts and instructions for quick access during critical situations.
          </Text>
        </Box>

        {/* Emergency Resources Section */}
        <Box mb={8}>
          <Heading size="lg">Important Contacts & Resources</Heading>
          <SimpleGrid columns={3} spacing={4} gap="40px">
            <EmergencyResourceCard
              title="Emergency Medical Contacts"
              description="Access medical emergency numbers and advice for various situations."
              link="https://www.medicalemergencyresources.com"
            />
            <EmergencyResourceCard
              title="Poison Control"
              description="For cases of poisoning or chemical exposure."
              link="https://www.poisoncontrol.com"
            />
            <EmergencyResourceCard
              title="Fire & Rescue Services"
              description="Contact your nearest fire and rescue station for emergencies."
              link="https://www.firedepartment.com"
            />
            <EmergencyResourceCard
              title="Mental Health Crisis Support"
              description="Get support during a mental health crisis."
              link="https://www.mentalhealthsupport.com"
            />
            <EmergencyResourceCard
              title="Police Department"
              description="Dial the police for immediate assistance in case of emergency."
              link="https://www.policeemergency.com"
            />
            <EmergencyResourceCard
              title="Safety Tips & First Aid"
              description="Learn the basics of first aid and safety tips."
              link="https://www.safetyfirstaid.com"
            />
          </SimpleGrid>
        </Box>

        {/* Button Section */}
        <Box mb={8}>
          <Button colorScheme="blue" onClick={() => window.location.href = "/emergency/contacts"}>
            View Detailed Emergency Contacts
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default EmergencyPage;

