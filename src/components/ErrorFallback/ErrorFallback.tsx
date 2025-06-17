import { Stack, H1, H2, Button, AnyIcon } from "@deskpro/deskpro-ui";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FallbackRender } from "@sentry/react";

export const ErrorFallback: FallbackRender = ({
  error,
  resetError,
}) => {

  let errorMessage = "An unknown error occurred."

  if (error instanceof Error){
    errorMessage = error.message
  }

  return (
    <Stack vertical gap={10} role="alert">
      <H1>Something went wrong:</H1>
      <H2>{errorMessage}</H2>
      <Button
        text="Reload"
        onClick={resetError}
        icon={faRefresh as AnyIcon}
        intent="secondary"
      />
    </Stack>
  );
};
