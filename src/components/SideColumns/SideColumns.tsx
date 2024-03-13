import styled from "styled-components";
import { Stack } from "@deskpro/deskpro-ui";

import { ReactElement } from "react";
import { Property } from "../Property/Property";

const Divider = styled.div`
  display: inline-block;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.grey20};
  margin: 0px 6px 0px 0px;
`;

export const SideColumns = ({
  fields,
}: {
  fields: {
    key: string;
    value: string | number | ReactElement;
  }[];
}) => {
  return (
    <Stack
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      {fields.map((item, i) => (
        <Stack
          key={i}
          style={{
            position: "relative",
            width: "100%",
            alignItems: "stretch",
          }}
        >
          {i !== 0 && <Divider />}
          <Stack
            vertical
            gap={["string", "number"].includes(typeof item.value) ? 4 : 0}
          >
            <Property title={item.key}>{item.value}</Property>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
