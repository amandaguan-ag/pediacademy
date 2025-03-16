import Card from "./Card";
import Button from "./Button";
import { Text, Stack, Link } from "@chakra-ui/react";

export default function EmergencyResourceCard({ title, description, link, ...props }) {
  return (
    <Card 
      title={title}
      {...props}
    >
      <Stack spacing={2}>
        <Text fontSize="lg">{description}</Text>
        <Link href={link} isExternal>
          <Button>Learn More</Button>
        </Link>
      </Stack>
    </Card>
  );
}