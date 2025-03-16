import Button from "./Button";
import { Box, Container, Heading, Text, Switch, VStack, Stack } from "@chakra-ui/react";

function SettingsPage() {
  return (
    <Box my={10}>
      <Container maxW="container.xl">
        {/* Page Title */}
        <Box mb={8}>
          <Heading size="lg">Settings</Heading>
          <Text fontSize="lg" mt={2}>
            Customize your preferences and settings for notifications, privacy, and more.
          </Text>
        </Box>

        {/* Notification Settings Section */}
        <Box mb={8}>
          <Heading size="md">Notification Settings</Heading>
          <VStack align="start" spacing={4} mt={4}>
            <Stack direction="row" align="center">
              <Text>Receive Email Notifications</Text>
              <Switch.Root>
                <Switch.HiddenInput />
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
                <Switch.Label />
                </Switch.Root>
            </Stack>
            <Stack direction="row" align="center">
              <Text>Receive SMS Notifications</Text>
              <Switch.Root>
                <Switch.HiddenInput />
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
                <Switch.Label />
                </Switch.Root>
            </Stack>
            <Stack direction="row" align="center">
              <Text>Receive Push Notifications</Text>
              <Switch.Root>
                <Switch.HiddenInput />
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
                <Switch.Label />
                </Switch.Root>
            </Stack>
          </VStack>
        </Box>

        {/* Privacy Settings Section */}
        <Box mb={8}>
          <Heading size="md">Privacy Settings</Heading>
          <VStack align="start" spacing={4} mt={4}>
            <Stack direction="row" align="center">
              <Text>Share my data with third-party apps</Text>
              <Switch.Root>
                <Switch.HiddenInput />
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
                <Switch.Label />
                </Switch.Root>
            </Stack>
            <Stack direction="row" align="center">
              <Text>Make my profile public</Text>
              <Switch.Root>
                <Switch.HiddenInput />
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
                <Switch.Label />
                </Switch.Root>
            </Stack>
            <Stack direction="row" align="center">
              <Text>Enable two-factor authentication</Text>
              <Switch.Root>
                <Switch.HiddenInput />
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
                <Switch.Label />
                </Switch.Root>
            </Stack>
          </VStack>
        </Box>

        {/* Account Management Section */}
        <Box mb={8}>
          <Heading size="md">Account Management</Heading>
          <VStack align="start" spacing={4} mt={4}>
            <Button colorScheme="blue" width="full">
              Change Email Address
            </Button>
            <Button colorScheme="blue" width="full">
              Change Password
            </Button>
            <Button colorScheme="red" width="full">
              Delete Account
            </Button>
          </VStack>
        </Box>

        {/* Save Settings Section */}
        <Box mb={8}>
          <Button colorScheme="blue" width="full" onClick={() => alert("Settings Saved!")}>
            Save Changes
          </Button>
        </Box>
        
      </Container>
    </Box>
  );
}

export default SettingsPage;
