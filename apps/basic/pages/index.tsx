import { useRouter } from "next/router";
import { Button } from "ui";

export default function Homepage() {
  const router = useRouter();
  return (
    <div>
      <h1>Basic web app</h1>
      <Button onClick={() => router.push('http://localhost:3001')} text="View the docs" />
    </div>
  );
}
