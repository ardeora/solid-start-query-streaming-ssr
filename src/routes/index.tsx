import { Suspense, createResource, onCleanup } from "solid-js";
import { A } from "solid-start";
import { Transition } from "solid-transition-group";
import Counter from "~/components/Counter";

export default function Home() {
	const [data] = createResource(
		async () => {
			await new Promise((r) => setTimeout(r, 3000));
			return "Hello, world!!!!";
		},
		{
			onHydrated(k, info) {
				console.log("onHydrated", k, info);
			},
		}
	);

	return (
		<main class="text-center mx-auto text-gray-700 p-4">
			<Transition name="slide-fade">
				<Suspense fallback={<LoadingIndicator />}>
					<h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
						{data()}
					</h1>
				</Suspense>
			</Transition>
			<Counter />
			<p class="mt-8">
				Visit{" "}
				<a
					href="https://solidjs.com"
					target="_blank"
					class="text-sky-600 hover:underline"
				>
					solidjs.com
				</a>{" "}
				to learn how to build Solid apps.
			</p>
			<p class="my-4">
				<span>Home</span>
				{" - "}
				<A href="/about" class="text-sky-600 hover:underline">
					About Page
				</A>{" "}
			</p>
		</main>
	);
}

const LoadingIndicator = () => {
	return (
		<h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
			Loadinggggggg.....
		</h1>
	);
};
