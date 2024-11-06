import { DarkThemeToggle, Navbar } from "flowbite-react";

function App() {
  return (
      <div>
      <Navbar fluid rounded>
          <Navbar.Brand href="https://flowbite-react.com">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link  href="#">
              About
            </Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
        <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">

          <h1 className="text-2xl dark:text-white">
            Flowbite React + Create React App
          </h1>
          <DarkThemeToggle />
        </main>
      </div>
  );
}

export default App;
