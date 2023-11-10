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
    // You can put any initialization code here that needs to run on the client
    // For example, you might want to automatically sign in the user when the component mounts
    handleGitHubSignIn();
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div>
      {user ? (
        // User is logged in
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleFirebaseSignOut}>Logout</button>
          <a href="../week8/shopping-list">Go to Shopping List</a>
        </div>
      ) : (
        // User is not logged in
        <div>
          <p>Please log in to access the application</p>
          <button onClick={handleGitHubSignIn}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
}
