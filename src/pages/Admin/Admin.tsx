import { Input } from "@deskpro/deskpro-ui";
import { useDeskproAppClient } from "@deskpro/app-sdk";

export const Admin = () => {
  const { client } = useDeskproAppClient();

  if (!client) return <div></div>;

  return (
    <Input
      onChange={(e) => client.setAdminSetting(e.target.value.trim())}
    ></Input>
  );
};
