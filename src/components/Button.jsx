import { Button } from "@chakra-ui/react";

export default function Card({ onClick, children }) {

  return (
    <Button
      bg="#557EC0"
      borderRadius="xl"
      width="max-content"
      px={20}
<<<<<<< HEAD
=======
      onClick={onClick}
>>>>>>> c49ea79c7ff387f969006a8a42fc0fda62187094
    >
      {children}
    </Button>
  );
}
