import { A, Outlet } from "solid-start";
import { NikeLogo } from "~/components/icons";

export default function Product() {
  return (
    <div class="text-gray-700 flex flex-col p-4 gap-4">
      <header class="h-12 border bg-gray-50 rounded flex pl-3 pr-1 items-center justify-between">
        <div class="text-orange-600 rounded-full flex items-center justify-center">
          <NikeLogo />
        </div>
        <div>
          <a
            href="https://github.com/ardeora"
            class="rounded-full block h-9 w-9 border-green-400 border-2"
          >
            <img
              src="https://avatars.githubusercontent.com/u/45807386?v=4"
              class="rounded-full"
            />
          </a>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
