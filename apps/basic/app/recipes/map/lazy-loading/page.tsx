import shops, { CoffeeShop } from "../../../../data/coffee-shops";

const API_URL = `${getApiUrl()}/api/coffee-shops?throttling=minimal`;

async function fetchShops() {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
    return shops;
  }
  const res = await fetch(API_URL, { next: { revalidate: 900 } });
  const data = await res.json();
  return data as CoffeeShop[];
}

export default async function Homepage() {
  const companies = await fetchShops();
  return (
    <div>
      <h1>Found {companies.length} coffee shops</h1>
    </div>
  );
}

function getApiUrl() {
  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case "production":
      return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    default:
      return "http://localhost:3001";
  }
}
