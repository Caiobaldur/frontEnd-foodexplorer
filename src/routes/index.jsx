import { BrowserRouter } from "react-router-dom";
import { UserRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { AdminRoutes } from "./admin.routes";
import { USER_ROLE } from "../utils/roles";

export function Routes() {
  const { user } = useAuth();

  function AcessRoute() {
    switch (user.isAdmin) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.USER:
        return <UserRoutes />;
      default:
        return <UserRoutes />;
    }
  }

  return (
    <BrowserRouter>
      {user ? <AcessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
