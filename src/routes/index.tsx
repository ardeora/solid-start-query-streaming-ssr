import { Suspense, createResource, onCleanup } from "solid-js";
import { A } from "solid-start";
import { Transition } from "solid-transition-group";

export default function Home() {
  return (
    <div class="text-gray-700 text-center flex flex-col px-4">
      <div class="pt-4">
        <a
          href="https://tanstack.com/query"
          class="font-bold text-gray-600 text-2xl"
        >
          TANSTACK{" "}
          <span class="bg-gradient-to-r from-[#EA4037] to-[#FF9B11] inline-block text-transparent bg-clip-text">
            Solid Query v5
          </span>
        </a>
      </div>
      <div class="leading-snug">Streaming SSR + Server Actions Demo</div>
      <p class="text-left pt-2">
        This demonstration underscores the remarkable capabilities that Solid.js
        offers to framework developers. The createResource primitive in Solid.js
        allows you to input an asynchronous function and receive a signal that
        updates when the promise returned by that function resolves.
        Additionally, this resource can trigger a Suspense boundary when the
        fetcher function is currently in progress. While this may sound simple,
        the true power of this primitive extends far beyond its apparent
        simplicity. Notably, createResource is also compatible with server-side
        rendering. This means that during the server-side rendering process, a
        resource can patiently wait until all the data in a route's hierarchy
        has been fetched before sending the generated HTML back to the client.
      </p>
      <A href="/product/1" class="text-sky-600 hover:underline">
        Product 1
      </A>
    </div>
  );
}

const LoadingIndicator = () => {
  return (
    <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
      Loadinggggggg.....
    </h1>
  );
};
