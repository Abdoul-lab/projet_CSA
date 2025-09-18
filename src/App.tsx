import { useState } from "react";
import { ForgotPassword } from "./screens/ForgotPassword";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { Verification } from "./screens/Verification";

export const App = (): JSX.Element => {
  const [currentScreen, setCurrentScreen] = useState<
    "login" | "register" | "forgot-password" | "verification"
  >("login"); // écran par défaut

  return (
    <div className="min-h-screen flex flex-col">
      {/* Barre de debug pour naviguer entre les écrans */}
      <nav className="bg-gray-200 p-3 flex gap-3 text-sm justify-center">
        <button
          onClick={() => setCurrentScreen("login")}
          className={`px-3 py-1 rounded ${
            currentScreen === "login" ? "bg-purple-500 text-white" : "bg-white"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setCurrentScreen("register")}
          className={`px-3 py-1 rounded ${
            currentScreen === "register" ? "bg-purple-500 text-white" : "bg-white"
          }`}
        >
          Register
        </button>
        <button
          onClick={() => setCurrentScreen("forgot-password")}
          className={`px-3 py-1 rounded ${
            currentScreen === "forgot-password"
              ? "bg-purple-500 text-white"
              : "bg-white"
          }`}
        >
          Forgot Password
        </button>
        <button
          onClick={() => setCurrentScreen("verification")}
          className={`px-3 py-1 rounded ${
            currentScreen === "verification"
              ? "bg-purple-500 text-white"
              : "bg-white"
          }`}
        >
          Verification
        </button>
      </nav>

      {/* Contenu de l'écran */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 p-6">
        {currentScreen === "login" && <Login />}
        {currentScreen === "register" && <Register />}
        {currentScreen === "forgot-password" && <ForgotPassword />}
        {currentScreen === "verification" && <Verification />}
      </div>
    </div>
  );
};
