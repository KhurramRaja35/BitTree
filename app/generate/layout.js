import { Suspense } from "react";

export default function GenerateLayout({ children }) {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      {children}
    </Suspense>
  );
}