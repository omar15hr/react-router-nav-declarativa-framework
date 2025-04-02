import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-4xl font-thin">Bienvenido a React Router</h1>
    </div>
  );
}
