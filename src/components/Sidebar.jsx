import { Box, VStack, Link, Icon } from "@chakra-ui/react";
import { FiHome, FiBook, FiMessageSquare, FiAlertCircle, FiUser, FiSettings, FiLogOut, FiBookOpen } from "react-icons/fi";
import { ColorModeButton } from './ui/color-mode';

const SidebarItem = ({ icon, children, ...props }) => (
  <Link
    display="flex"
    alignItems="center"
    gap={3}
    px={4}
    py={3}
    _hover={{ bg: "gray.100", _dark: { bg: "gray.700" } }}
    width="full"
    color="gray.800"
    _dark={{ color: "gray.100" }}
    {...props}
  >
    <Icon as={icon} />
    {children}
  </Link>
);

export default function Sidebar() {
  return (
    <Box
      as="nav"
      bg="gray.50"
      _dark={{ bg: "gray.800" }}
      height="100vh"
      width="200px"
      py={4}
      position="fixed"
      left={0}
      top={0}
    >
      <VStack height="full" spacing={4} align="stretch">
        <VStack spacing={1} align="stretch">
          <Box px={4} py={2}>
            <ColorModeButton />
          </Box>
          <SidebarItem icon={FiHome} href="/">Home</SidebarItem>
          <SidebarItem icon={FiBook} href="/modules">Modules</SidebarItem>
          <SidebarItem icon={FiBookOpen} href="/dictionary">Dictionary</SidebarItem>
          <SidebarItem icon={FiMessageSquare} href="/chat">Chat</SidebarItem>
          <SidebarItem icon={FiAlertCircle} href="/emergency">Emergency</SidebarItem>
        </VStack>
        <VStack spacing={1} align="stretch" mt="auto">
          <SidebarItem icon={FiUser} href="/profile">Profile</SidebarItem>
          <SidebarItem icon={FiSettings} href="/settings">Settings</SidebarItem>
          <SidebarItem icon={FiLogOut} href="/logout">Logout</SidebarItem>
        </VStack>
      </VStack>
    </Box>
  );
}
