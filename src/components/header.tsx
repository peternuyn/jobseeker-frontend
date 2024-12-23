import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import ukFlag from '../assets/flags/united-kingdom.png';
import vnFlag from '../assets/flags/vietnam.png';


/**
 * The `Header` component represents the header section of the application.
 * It includes navigation links and a dropdown menu for language selection.
 *
 * @returns {JSX.Element} The rendered header component.
 * @remarks
 * This component uses Tailwind CSS classes and ShadcnUI components for styling.
 * The header is divided into two main sections:
 * 1. A top bar with navigation links and a language dropdown menu.
 * 2. A bottom bar with the application title and additional navigation links.
 */
const Header: React.FC = () => {
    return (
        <header className="bg-blue-600">
            <div className="flex justify-end items-center bg-white px-4">    
                <nav>
                    <ul className="flex space-x-10 text-sm font-thin">
                        <li><a href="/" className="hover:text-gray-300">Home</a></li>
                        <li><a href="/contact" className="hover:text-gray-300">Call Us</a></li>
                        <li>
                            
                            <DropdownMenu>
                                <DropdownMenuTrigger>@Language</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                    <img src={ukFlag} alt="Vietnamese Flag" className="inline-block w-4 h-4 mr-2" />
                                    English
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <img src={vnFlag} alt="Vietnamese Flag" className="inline-block w-4 h-4 mr-2" />
                                        Vietnamese
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                </nav>
            </div>
            
            
            <div className="flex justify-between items-center p-4">
                <div className="text-white text-2xl font-bold">
                    <h1>JobViet</h1>
                </div>

               
                <nav>
                    <ul className="flex font-semibold space-x-10">
                        <li><a href="/" className="text-white text-sm hover:text-gray-300">About Us</a></li>
                        <li><a href="/jobs" className="text-white text-sm hover:text-gray-300">Employers</a></li>
                        <li><a href="/about" className="text-white text-sm hover:text-gray-300">Job Seeker</a></li>
                        <li><a href="/contact" className="text-white text-sm hover:text-gray-300">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;