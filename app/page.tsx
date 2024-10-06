import InputSearch from "./_components/inputSearch";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen py-20 px-10 gap-10">
      <h1 className="text-4xl font-bold text-center">
        GoDomain SIH - Pixel Pioneers
      </h1>
      <InputSearch />
    </main>
  );
}
