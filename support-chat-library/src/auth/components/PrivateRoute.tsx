import { Navigate } from "react-router";

interface Props {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

export function PrivateRoute({ isAuthenticated, children }: Props) {
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  return children;
}
