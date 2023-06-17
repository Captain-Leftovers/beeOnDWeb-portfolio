import BigProjCard from "./components/BigProjCard"


export const metadata = {
    title: 'Projects',
    description: 'Projects page',
    }

export default function Projects() {
  return (
    <main className="flex flex-col items-center justify-center grow w-full max-w-screen-2xl " >
     //TODO : Add projects cards and some slogan

    <BigProjCard />


    </main>
  )
}