import { NextRouter } from "next/router";

export function handleGoBack(router: NextRouter) {
  const newRoute = router.pathname.split("/");

  newRoute.pop();

  router.push(newRoute.join("/"));
}
