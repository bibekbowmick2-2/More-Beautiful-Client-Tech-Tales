import React from 'react';
import { Banner, Button, Label, TextInput } from "flowbite-react";
import {toast} from 'react-toastify';
const MoreQuestion = () => {
    return (
        <div>
            <div
                className="hero min-h-[600px]"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>

<form action="#" className="flex justify-center w-full flex-col items-center md:flex-row md:gap-x-3" onSubmit={(e) => {e.preventDefault(); toast.success('Thanks for subscribing!')}}>
            <Label
              htmlFor="email"
              className="mb-2 mr-auto shrink-0  font-extrabold text-gray-950 text-3xl dark:text-gray-400 md:m-0 md:mb-0"
            >
              Sign up for our newsletter
            </Label>
            <TextInput id="email" placeholder="Enter your email" required type="email" className='w-72' />
            <Button type="submit">Subscribe</Button>
          </form>
                
            </div>
        </div>
    );
};

export default MoreQuestion;