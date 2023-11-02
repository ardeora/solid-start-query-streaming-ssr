import { createEffect, createMemo, createSignal, For, JSX } from "solid-js";
import { Lock } from "./icons";
import { A, useLocation } from "solid-start";

export default function AppShell(props: {
  children?: JSX.Element | JSX.Element[];
}) {
  const location = useLocation();
  const pathSegments = createMemo(() => {
    return location.pathname.split("/").filter((x) => x);
  });

  return (
    <div class="flex flex-col container gap-4 max-w-5xl mx-auto pt-4 items-center px-4">
      <div class="border border-gray-300 w-full text-sm leading-snug bg-white rounded-md shadow py-2 px-4 text-gray-600 flex gap-2 items-center">
        <Lock />
        <A href="/" class="text-gray-700 font-semibold hover:underline">
          acme.com
        </A>
        <div>/</div>
        <For each={pathSegments()}>
          {(segment, i) => (
            <>
              <A
                href={`/${pathSegments()
                  .slice(0, i() + 1)
                  .join("/")}`}
                class="animate-segmentFadeIn inline-block font-semibold rounded-sm px-1.5 tabular-nums hover:underline"
              >
                {segment}
              </A>
              <div class="text-gray-500">/</div>
            </>
          )}
        </For>
      </div>
      <main class="border border-gray-300 w-full bg-white rounded-md shadow min-h-[700px]">
        {props.children}
      </main>
    </div>
  );
}
