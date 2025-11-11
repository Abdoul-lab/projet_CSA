import React, { useState } from 'react';
import { Login } from './screens/Login';
import { Register } from './screens/Register';
import { ForgotPassword } from './screens/ForgotPassword';
import { Verification } from './screens/Verification';
import { ResetPassword } from './screens/ResetPassword/ResetPassword';

export const App = (): JSX.Element => {
  const [currentScreen, setCurrentScreen] = useState<"login" | "register" | "forgot-password" | "verification" | "reset-password">("login");
  const [userEmail, setUserEmail] = useState<string>('');
  const [resetToken, setResetToken] = useState<string>('');

  const switchToRegister = () => setCurrentScreen("register");
  const switchToLogin = () => setCurrentScreen("login");
  const switchToForgotPassword = () => setCurrentScreen("forgot-password");
  const switchToVerification = (email: string) => {
    setUserEmail(email);
    setCurrentScreen("verification");
  };
  const switchToResetPassword = (token: string) => {
    setResetToken(token);
    setCurrentScreen("reset-password");
  };

  if (currentScreen === "reset-password") {
    return <ResetPassword token={resetToken} onSuccess={switchToLogin} />;
  }

  if (currentScreen === "verification") {
    return <Verification email={userEmail} onBack={switchToForgotPassword} onNext={switchToResetPassword} />;
  }

  if (currentScreen === "forgot-password") {
    return <ForgotPassword onContinue={switchToVerification} />;
  }

  if (currentScreen === "register") {
    return <Register onSwitchToLogin={switchToLogin} />;
  }

  return <Login onSwitchToRegister={switchToRegister} onForgotPassword={switchToForgotPassword} />;
};