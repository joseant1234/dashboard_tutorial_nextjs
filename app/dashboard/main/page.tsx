import { WidgetsGrid } from "@/components";

export const metadata = {
  title: "Admin Dashboard",
  description: "SEO Title",
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>

      {/* se movió esta parte al componente WidgetsGrid porque usará la parte de cliente (renderización por parte del cliente), ya que en ese componente se invocará al selector de redux que solo se ejecuta en el client */}
      {/* <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget />
      </div> */}

      <WidgetsGrid />
    </div>
  );
}
