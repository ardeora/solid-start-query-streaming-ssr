import { Suspense, createResource, onCleanup } from "solid-js";
import { A, Navigate } from "solid-start";
import { Transition } from "solid-transition-group";

export default function Home() {
  return <Navigate href="/product/1" />;
}

const LoadingIndicator = () => {
  return (
    <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
      Loadinggggggg.....
    </h1>
  );
};
