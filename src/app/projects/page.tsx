import BigProjCard from "./components/BigProjCard"


export const metadata = {
    title: 'Projects',
    description: 'Projects page',
    }

export default function Projects() {
  return (
    <main className="flex flex-col items-center justify-center grow px-80 " >
     //TODO : Add projects cards and some slogan

    <BigProjCard />


    </main>
  )
}