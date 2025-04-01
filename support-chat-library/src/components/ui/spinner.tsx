export const Spinner = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
    </div>
  );
};