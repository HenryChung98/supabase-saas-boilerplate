"use client";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/auth-context";

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return <div>Unauthorized</div>;
  }

  return (
    <div className="container max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Profile information</CardDescription>
        </CardHeader>
        <CardContent>
          {user ? (
            <div>
              <p>Full Name: {user.full_name}</p>
              <p>Email: {user.email}</p>
            </div>
          ) : (
            <LoadingSpinner />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
