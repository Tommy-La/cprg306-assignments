"use client"
import { useEffect } from 'react';
import { useUserAuth } from "./_utils/auth-context";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleGitHubSignIn = async () => {
    await gitHubSignIn();
  };

  const handleFirebaseSignOut = async () => {
    await firebaseSignOut();
  };

  useEffect(() => {

    handleGitHubSignIn();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleFirebaseSignOut}>Logout</button>
          <a href="../week8/shopping-list">Go to Shopping List</a>
        </div>
      ) : (
        <div>
          <p>Please log in to access the application</p>
          <button onClick={handleGitHubSignIn}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
}
