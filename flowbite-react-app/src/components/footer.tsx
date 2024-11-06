import { Footer } from "flowbite-react";

function FooterSection() {
  return (
    <div className="w-full p-6 border-t bg-white dark:bg-gray-800 md:flex md:items-center md:justify-between" >
      <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </div>
  );
}

export default FooterSection;