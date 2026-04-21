import { Suspense } from "react";

export default function MealsLayout({ children }) {
  return <Suspense>{children}</Suspense>;
}
