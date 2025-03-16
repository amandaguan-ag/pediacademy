import { Box, VStack, Link, Icon } from "@chakra-ui/react";
import { WbSunnyRounded, HomeRounded, MenuBookRounded, ChatRounded, EmergencyRounded, PersonRounded, SettingsRounded, LogoutRounded} from "@mui/icons-material";
import { FiHome, FiBook, FiMessageSquare, FiAlertCircle, FiUser, FiSettings, FiLogOut, FiBookOpen } from "react-icons/fi";
import { ColorModeButton } from './ui/color-mode';

const SidebarItem = ({ icon, children, ...props }) => (
  <Link
    display="flex"
    alignItems="center"
    gap={3}
    mx={4}
    my={3}
    color="white"
    _hover={{ color: "#85B0DE", textDecoration: "none" }}
    _focus={{ color: "#85B0DE", outline: "none", boxShadow: "none" }}
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
      bg="#557EC0"
      height="100vh"
      pl={2}
      pr={4}
      py={4}
      position="fixed"
      left={0}
      top={0}
    >
      <VStack height="full" spacing={4} align="stretch">
        <VStack spacing={1} align="stretch" fontWeight="semibold">
          <Box px={4} py={2}>
            <ColorModeButton />
          </Box>
          <SidebarItem icon={HomeRounded} href="/">Home</SidebarItem>
          <SidebarItem icon={MenuBookRounded} href="/modules">Modules</SidebarItem>
          <SidebarItem icon={FiBookOpen} href="/dictionary">Dictionary</SidebarItem>
          <SidebarItem icon={ChatRounded} href="/chat">Chat</SidebarItem>
          <SidebarItem icon={EmergencyRounded} href="/emergency">Emergency</SidebarItem>
        </VStack>
        <VStack spacing={1} align="stretch" mt="auto">
          <SidebarItem icon={PersonRounded} href="/profile">Profile</SidebarItem>
          <SidebarItem icon={SettingsRounded} href="/settings">Settings</SidebarItem>
          <SidebarItem icon={LogoutRounded} href="/logout">Logout</SidebarItem>
        </VStack>
      </VStack>
    </Box>
  );
}
