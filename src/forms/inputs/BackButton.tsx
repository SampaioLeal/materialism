import Button from "@mui/material/Button";
import { useRouter } from "next/router";

interface BackButtonProps {
  text: string;
}

export default function BackButton({ text }: BackButtonProps) {
  const router = useRouter();

  function handleGoBack() {
    const listPath = router.pathname.split("/");

    listPath.pop();

    router.push(listPath.join("/"));
  }

  return (
    <Button variant="outlined" color="primary" onClick={handleGoBack}>
      {text}
    </Button>
  );
}
