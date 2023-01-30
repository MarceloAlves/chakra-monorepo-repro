import * as React from "react";
import { OurTable } from "components";
import { useDisclosure } from "@chakra-ui/react";

export const SomeApp = () => {
  const so = useDisclosure();
  // const t = useToast // TODO: autocomplete does not work here
  return <OurTable />;
};
