import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans bg-background">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 ">
        <div>
          <ProjectCard title={"ChessTrainer"}
                       description={"A Cpp/Qt6 application I built for practicing chess openers"}
                       projectName={"chess-repo"}/>
          <ProjectCard title={"Blah"}
                       description={"BlahDescription. more testing data long long long long paragraph but not rly but still a little long ig. idrk define long? It's not a book but it is still pretty long for  a simple description"}
                       projectName={"Blah"}/>
        </div>
      </main>
    </div>
  );
}
