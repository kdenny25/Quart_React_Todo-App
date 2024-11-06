import { DarkThemeToggle } from "flowbite-react";
import Layout from "../components/layout"

function Home() {
  return (
      <div >
          <Layout>
              <main className="flex min-h-dvh items-center justify-center gap-2 dark:bg-gray-800">

                  <h1 className="text-2xl dark:text-white">
                      Flowbite React + Create React App
                  </h1>
                  <DarkThemeToggle/>
              </main>
          </Layout>
      </div>
  );
}

export default Home;
