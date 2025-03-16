import Button from "./Button";
import { Box, Container, Heading, Text, SimpleGrid, VStack} from "@chakra-ui/react";

function ProfilePage() {
  // Sample user and child data (replace with actual data from state or API)
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 (555) 123-4567",
    emergencyContact: "+1 (555) 987-6543",
  };

  const child = {
    name: "Jane Doe",
    age: 6,
    chronicConditions: ["Diabetes Type 1", "Asthma"],
    allergies: ["Peanuts"],
    medications: ["Insulin", "Albuterol Inhaler"],
  };

  return (
    <Box my={10}>
      <Container maxW="container.xl">
        {/* User Profile Section */}
        <Box mb={8}>
          <Heading size="lg">User Profile</Heading>
          <VStack align="start" spacing={4} mt={4}>
            <Text><strong>Name:</strong> {user.name}</Text>
            <Text><strong>Email:</strong> {user.email}</Text>
            <Text><strong>Phone:</strong> {user.phone}</Text>
            <Text><strong>Emergency Contact:</strong> {user.emergencyContact}</Text>
          </VStack>
        </Box>

        {/* Child Profile Section */}
        <Box mb={8}>
          <Heading size="lg">Child Profile</Heading>
          <VStack align="start" spacing={4} mt={4}>
            <Text><strong>Name:</strong> {child.name}</Text>
            <Text><strong>Age:</strong> {child.age} years old</Text>
            <Text><strong>Chronic Conditions:</strong></Text>
            <SimpleGrid columns={2} spacing={4}>
              {child.chronicConditions.map((condition, index) => (
                <Text key={index}>- {condition}</Text>
              ))}
            </SimpleGrid>
            <Text><strong>Allergies:</strong></Text>
            <SimpleGrid columns={2} spacing={4}>
              {child.allergies.map((allergy, index) => (
                <Text key={index}>- {allergy}</Text>
              ))}
            </SimpleGrid>
            <Text><strong>Medications:</strong></Text>
            <SimpleGrid columns={2} spacing={4}>
              {child.medications.map((medication, index) => (
                <Text key={index}>- {medication}</Text>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>

        {/* Update Button Section */}
        <Box mb={8}>
          <Button colorScheme="blue" onClick={() => alert("Edit Profile functionality")}>
            Edit Profile
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ProfilePage;
