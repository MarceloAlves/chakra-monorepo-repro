import * as React from "react";
import { OurTable } from "components";
import { useDisclosure } from "@chakra-ui/react";

export const SomeApp = () => {
  const so = useDisclosure();
  return <OurTable />;
};
