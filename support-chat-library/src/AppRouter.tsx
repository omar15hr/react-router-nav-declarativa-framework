import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AuthLayout } from "./auth/layout/AuthLayout";
import { LoginPage } from "./auth/pages/LoginPage";
import { RegisterPage } from "./auth/pages/RegisterPage";
import { lazy, Suspense } from "react";
import { sleep } from "./lib/sleep";
import { Spinner } from "./components/ui/spinner";

const ChatLayout = lazy(async () => {
  await sleep(1500);
  return import("./chat/layout/ChatLayout");
});

const ChatPage = lazy(async () => import("./chat/pages/ChatPage"));
const NoChatSelectedPage = lazy(async () => import("./chat/pages/NoChatSelectedPage"));

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>

        {/* Chat */}
        <Route
          path="/chat"
          element={
            <Suspense fallback={<Spinner />}>
              <ChatLayout />
            </Suspense>
          }
        >
          <Route index element={<NoChatSelectedPage />} />
          <Route path="/chat/:clientId" element={<ChatPage />} />
        </Route>

        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
}
