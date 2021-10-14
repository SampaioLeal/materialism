import Container from "@mui/material/Container";
import { observer } from "mobx-react-lite";

interface PageWrapProps {
  tabs?: boolean;
  children: React.ReactChild | React.ReactFragment | React.ReactPortal;
}

function PageWrapComponent({ children, tabs }: PageWrapProps) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: tabs ? 16 : 10,
      }}
    >
      {children}
    </Container>
  );
}

export const PageWrap = observer(PageWrapComponent);
