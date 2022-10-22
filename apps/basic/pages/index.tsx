import { useRouter } from "next/router";
import { useCallback } from "react";
import { Button } from "ui";

const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? "http://localhost:3001";

export default function Homepage() {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.push(DOCS_URL);
  }, [router]);

  return (
    <div>
      <h1>Basic web app</h1>
      <Button onClick={onClick} text="View the docs" />
    </div>
  );
}
