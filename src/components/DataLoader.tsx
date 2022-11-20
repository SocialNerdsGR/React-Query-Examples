import { PropsWithChildren } from "react";

type DataLoaderProps = {
  isLoading: boolean;
  isError: boolean;
};

export function DataLoader({
  isLoading,
  isError,
  children
}: PropsWithChildren<DataLoaderProps>) {
  if (isLoading) {
    return <div>Loading todo...</div>;
  }

  if (isError) {
    return <div>Failed to load the data</div>;
  }
  return <>{children}</>;
}
