import Image from "next/image";


export default function Header() {
    return(
        <header className="bg-black h-16 flex justify-between items-center fixed top-0 left-0 w-full z-50">
            <div>
                <Image src="logo.svg" alt="Logo" height={48} width={48} className="bg-white m-8 fill-white" />
            </div>
            <nav>
                <ul className="flex items-center gap-x-8 px-8">
                    <li className="text-white cursor-pointer"><a href="/.">Home</a></li>
                    <li className="text-white cursor-pointer"><a href="/About">About</a></li>
                    <li className="text-white cursor-pointer"><a href="/Services">Services</a></li>
                    <button className="bg-white px-4 py-2 rounded-md cursor-pointer"><a href="">Call Us!</a></button>
                </ul>
            </nav>
        </header>
    );

}