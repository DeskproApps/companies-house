import { Stack, H1, H2, Button, AnyIcon } from "@deskpro/app-sdk";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: string;
  resetErrorBoundary: () => void;
}) => {
  return (
    <Stack vertical gap={10} role="alert">
      <H1>Something went wrong:</H1>
      <H2>{error}</H2>
      <Button
        text="Reload"
        onClick={resetErrorBoundary}
        icon={faRefresh as AnyIcon}
        intent="secondary"
      />
    </Stack>
  );
};
