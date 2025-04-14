import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context with a default value
export const AuthContext = createContext([undefined, () => {}]);

// Component name should be PascalCase: AuthProvider
export default function AuthProvider({ children }) {
  // Clean up malformed "undefined" string in localStorage
  if (localStorage.getItem("Users") === "undefined") {
    localStorage.removeItem("Users");
  }

  // Parse safely from localStorage
  let parsedUser;
  try {
    const stored = localStorage.getItem("Users");
    parsedUser = stored ? JSON.parse(stored) : undefined;
  } catch (error) {
    console.error("Failed to parse auth user from localStorage:", error);
    parsedUser = undefined;
  }

  const [authUser, setAuthUser] = useState(parsedUser);

  // Keep localStorage in sync with state
  useEffect(() => {
    if (authUser !== undefined) {
      localStorage.setItem("Users", JSON.stringify(authUser));
    } else {
      // Optionally, handle clearing the localStorage when user logs out
      localStorage.removeItem("Users");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext easily
export const useAuth = () => useContext(AuthContext);
