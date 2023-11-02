// @refresh reload
import { Suspense } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  unstable_clientOnly as clientOnly,
} from "solid-start";
import "./root.css";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import AppShell from "./components/AppShell";

export default function Root() {
  const client = new QueryClient();

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <ErrorBoundary>
          <QueryClientProvider client={client}>
            <SolidQueryDevtools />
            <AppShell>
              <Routes>
                <FileRoutes />
              </Routes>
            </AppShell>
          </QueryClientProvider>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
