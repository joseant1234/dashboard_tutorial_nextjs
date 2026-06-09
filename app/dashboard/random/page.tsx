import { cacheLife } from "next/cache";

export default async function RandomPage() {
  // cuando se recarga la pagina no se ve los cambios de random, now, date, uuid, bytes hasta 10 segundos despues. Cada 10 segundos se revalida la data
  "use cache";
  cacheLife({
    stale: 5, // 5 segundos antes de ser obsoleto
    revalidate: 10, // 10 segundos antes de revalidad
    // expire: 86400, // 1 day until expired
  });

  const random = Math.random();
  const now = Date.now();
  const date = new Date();
  const uuid = crypto.randomUUID();
  const bytes = crypto.getRandomValues(new Uint8Array(16));

  return (
    <div>
      <p>{random}</p>
      <p>{now}</p>
      <p>{date.getTime()}</p>
      <p>{uuid}</p>
      <p>{bytes}</p>
    </div>
  );
}
