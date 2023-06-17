import BigProjCard from "./components/BigProjCard"


export const metadata = {
    title: 'Projects',
    description: 'Projects page',
    }

export default function Projects() {
  return (
    <main className="flex flex-col items-center justify-center grow w-full max-w-screen-2xl gap-40 " >
      <div>

    <h1 className="text-6xl font-medium max-w-screen-lg text-center mt-20 ">Exploring the intersection of technology and creativity.</h1>
      </div>

    <BigProjCard />
    <BigProjCard />
    <BigProjCard />
    <BigProjCard />


    </main>
  )
}