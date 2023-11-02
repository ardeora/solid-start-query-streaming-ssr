import { createQuery } from "@tanstack/solid-query";
import { For, Show, Suspense, createMemo, createResource } from "solid-js";
import { A, useParams } from "solid-start";
import { API_URL, Product, RecommendedPick } from "~/utils";

export default function ProductDetails() {
  const params = useParams();

  const product = createQuery(() => ({
    queryKey: ["product", params.id],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/products/details/${params.id}`);
      return res.json() as Promise<Product>;
    },
  }));

  return (
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <Gallery />
        <Info />
      </div>
      <div>
        <p class="text-xl font-semibold text-gray-600">Recommended Picks</p>
        <Suspense fallback="Loadingg......">
          <RecommendedPicks />
        </Suspense>
      </div>
    </div>
  );
}

const Gallery = () => {
  const params = useParams();

  const images = createQuery(() => ({
    queryKey: ["product", params.id],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/products/details/${params.id}`);
      return res.json() as Promise<Product>;
    },
    select(data) {
      return data.images;
    },
  }));

  return (
    <div class="flex flex-col gap-2 w-72">
      <div class="h-72 w-72 flex-shrink-0 bg-gray-50 rounded border overflow-hidden">
        <Suspense>
          <Show when={images.data?.[0]} keyed>
            {(image) => <img src={image} class="h-full w-full object-cover" />}
          </Show>
        </Suspense>
      </div>
      <div class="flex gap-2 ">
        <div class="flex-1 w-full aspect-square bg-gray-50 rounded border overflow-hidden">
          <Suspense>
            <Show when={images.data?.[1]} keyed>
              {(image) => (
                <img src={image} class="h-full w-full object-cover" />
              )}
            </Show>
          </Suspense>
        </div>
        <div class="flex-1 aspect-square bg-gray-50 rounded border overflow-hidden">
          <Suspense>
            <Show when={images.data?.[2]} keyed>
              {(image) => (
                <img src={image} class="h-full w-full object-cover" />
              )}
            </Show>
          </Suspense>
        </div>
        <div class="flex-1 aspect-square bg-gray-50 rounded border overflow-hidden">
          <Suspense>
            <Show when={images.data?.[3]} keyed>
              {(image) => (
                <img src={image} class="h-full w-full object-cover" />
              )}
            </Show>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const Info = () => {
  const params = useParams();

  const product = createQuery(() => ({
    queryKey: ["product", params.id],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/products/details/${params.id}`);
      return res.json() as Promise<Product>;
    },
  }));

  return (
    <Suspense>
      <div class="flex-1 flex flex-col">
        <h1 class="font-bold text-2xl">{product.data?.name}</h1>
        <Show when={product.data?.price} keyed>
          {(price) => <DisplayPrice price={price} />}
        </Show>

        <p class="leading-tight text-gray-600 pt-2">
          {product.data?.description}
        </p>
      </div>
    </Suspense>
  );
};

const DisplayPrice = (props: { price: Product["price"] }) => {
  const getDiscountedPrice = createMemo(() => {
    const price = props.price;
    if (!price.discount) return price.value;
    return price.value - (price.value * price.discount) / 100;
  });

  return (
    <p class="text-xl font-semibold flex gap-2">
      <span>${getDiscountedPrice()}</span>
      <Show when={props.price.discount} keyed>
        {(discount) => (
          <>
            <span class=" text-gray-400 line-through">
              ${props.price.value}
            </span>
            <span class="text-orange-500">-{discount}%</span>
          </>
        )}
      </Show>
    </p>
  );
};

const RecommendedPicks = () => {
  const params = useParams();

  const picks = createQuery(() => ({
    queryKey: ["recommended", params.id],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/products/recommended/${params.id}`);
      return res.json() as Promise<RecommendedPick[]>;
    },
  }));

  return (
    <div class="grid grid-cols-4">
      <Suspense fallback="Loadingg......">
        <Show when={picks.data} keyed>
          {(picks) => <For each={picks}>{(pick) => <Pick pick={pick} />}</For>}
        </Show>
      </Suspense>
    </div>
  );
};

const Pick = (props: { pick: RecommendedPick }) => {
  return (
    <div>
      <div>Hello</div>
    </div>
  );
};
