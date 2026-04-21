import { Suspense } from "react";
import MealsLoadingPage from "./loading";

export default function MealsLayout({ children }) {
  return <Suspense fallback={<MealsLoadingPage />}>{children}</Suspense>;
}
