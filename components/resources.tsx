// 'use client'

// import { useTheme } from "next-themes";
// import { useEffect } from "react";
// import PageHeader from "./page-header";

// export default function Contact() {
//   const { theme, setTheme } = useTheme();

//   // Set the theme to 'dark' whenever the component is mounted
//   useEffect(() => {
//     if (theme !== "dark") {
//       setTheme("dark");
//     }
//   }, [theme, setTheme]);

//   return (
//     <section>
//       <div className="pt-32 pb-12 md:pt-44 md:pb-20">
//         <div className="px-4 sm:px-6">
//           <PageHeader
//             className="mb-12 md:mb-20"
//             title="Get in touch"
//             description="Fill out the form below to set up a call, or keep reading to get in touch with us for customer support, partnerships, or media enquiries."
//           >
//           </PageHeader>

//           {/* Contact form */}
//           <div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] before:shadow-none after:h-px after:w-full after:border-b after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] after:shadow-none mb-16 pb-3">
//             <div className="w-full max-w-xs mx-auto shrink-0">
//               <form className="relative">
//                 {/* Border with dots in corners */}
//                 <div
//                   className="absolute -inset-3 bg-transparent bg-gradient-to-b from-gray-700/80 to-gray-700/70 rounded-lg -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[15px] before:bg-[length:15px_15px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[15px] after:bg-[length:15px_15px] after:[background-position:top_center,bottom_center] after:bg-no-repeat  after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)]"
//                   aria-hidden="true"
//                 />
//                 <div className="space-y-5">
//                   <div className="space-y-3">
//                     <div>
//                       <label className="sr-only" htmlFor="name">
//                         Name
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 text-gray-400/70 pl-4 flex items-center pointer-events-none">
//                           <svg
//                             className="fill-current"
//                             xmlns="http://www.w3.org/2000/svg"
//                             width={16}
//                             height={16}
//                           >
//                             <path d="M14.9 0c-.3 0-8.4.8-11.6 4-2.8 2.8-2.2 6.5-1.2 8.5L.3 14.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l1.8-1.8c.9.4 2.2.8 3.6.8 1.6 0 3.3-.5 4.9-2 3.4-3.4 4-11.3 4-11.6 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3Zm-4.3 11.3c-1.9 1.9-4.2 1.5-5.5 1.1L9.4 8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L3.6 11c-.4-1.4-.8-3.7 1.1-5.6 1.9-1.9 6.5-2.9 9.2-3.3-.3 2.3-1.1 7-3.3 9.2Z" />
//                           </svg>
//                         </div>
//                         <input
//                           id="name"
//                           className="form-input text-sm w-full pl-10 pr-4"
//                           type="text"
//                           placeholder="Your name..."
//                           required
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="sr-only" htmlFor="email">
//                         Email
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 text-gray-400/70 pl-4 flex items-center pointer-events-none">
//                           <svg
//                             className="fill-current"
//                             xmlns="http://www.w3.org/2000/svg"
//                             width={16}
//                             height={14}
//                           >
//                             <path d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z" />
//                           </svg>
//                         </div>
//                         <input
//                           id="email"
//                           className="form-input text-sm w-full pl-10 pr-4"
//                           type="email"
//                           placeholder="Your email..."
//                           required
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="sr-only" htmlFor="message">
//                         Message
//                       </label>
//                       <textarea
//                         id="message"
//                         className="form-textarea text-sm w-full resize-none"
//                         placeholder="Your message.."
//                         rows={3}
//                         required
//                         defaultValue={""}
//                       />
//                     </div>
//                     <div>
//                       <label className="flex items-center">
//                         <input type="checkbox" className="form-checkbox" />
//                         <span className="text-sm text-gray-500 ml-2">
//                           I'd like to receive updates &amp; product news.
//                         </span>
//                       </label>
//                     </div>
//                   </div>
//                   <div>
//                     {/* <button className="btn text-gray-800 bg-gray-100 hover:bg-white w-full w-full"> */}
//                     <button className="btn  text-gray-800 bg-gray-100 hover:bg-white w-full">
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//           {/* Cards */}
//           <div className="max-w-xs md:max-w-6xl mx-auto">
//             <div className="grid md:grid-cols-3 gap-6 xl:gap-9 xl:mx-8 max-md:-mx-3">
//               {/* Card */}
//               <div className="flex flex-col rounded-lg bg-gradient-to-b from-gray-700/50 to-gray-700/40 p-5">
//                 <div className="grow mb-3">
//                   <div className="font-inter-tight font-semibold text-gray-200 mb-1">
//                     Email
//                   </div>
//                   <p className="text-sm text-gray-500">
//                     Email us your queries and we'll get back to you ASAP.
//                   </p>
//                 </div>
//                 <div className="flex items-center space-x-2.5">
//                   <svg
//                     className="shrink-0 fill-indigo-500/80"
//                     width={16}
//                     height={16}
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M8 0a8 8 0 1 0 3.2 15.335l.916-.4-.8-1.833-.916.4A6 6 0 1 1 14 8v1a1 1 0 1 1-2 0V8a4.033 4.033 0 1 0-1.286 2.92A2.987 2.987 0 0 0 16 9V8a8.009 8.009 0 0 0-8-8Zm0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
//                   </svg>
//                   <div className="text-sm text-gray-200">
//                     hello@cruip.com
//                   </div>
//                 </div>
//               </div>
//               {/* Card */}
//               <div className="flex flex-col rounded-lg bg-gradient-to-b from-gray-700/50 to-gray-700/40 p-5">
//                 <div className="grow mb-3">
//                   <div className="font-inter-tight font-semibold text-gray-200 mb-1">
//                     Phone
//                   </div>
//                   <p className="text-sm text-gray-500">
//                     Would you like to have a chat? Feel free to give us a call.
//                   </p>
//                 </div>
//                 <div className="flex items-center space-x-2.5">
//                   <svg
//                     className="shrink-0 fill-indigo-500/80"
//                     width={12}
//                     height={16}
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M10 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 13V3h8v10H2Z" />
//                   </svg>
//                   <div className="text-sm text-gray-200">
//                     +447359510000
//                   </div>
//                 </div>
//               </div>
//               {/* Card */}
//               <div className="flex flex-col rounded-lg bg-gradient-to-b from-gray-700/50 to-gray-700/40 p-5">
//                 <div className="grow mb-3">
//                   <div className="font-inter-tight font-semibold text-gray-200 mb-1">
//                     Address
//                   </div>
//                   <p className="text-sm text-gray-500">
//                     Prefer to visit? We're located in London, United Kingdom.
//                   </p>
//                 </div>
//                 <div className="flex items-center space-x-2.5">
//                   <svg
//                     className="shrink-0 fill-indigo-500/80"
//                     width={14}
//                     height={16}
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M5.591 15.069c.404.358.684.606.709.631.4.4 1 .4 1.4.1.05-.05 1.075-.975 2.1-1.9 1.025-.925 2.05-1.85 2.1-1.9 1.4-1.3 2.1-3.1 2.1-5 0-3.9-3.1-7-7-7S0 3.1 0 7c0 1.9.7 3.7 2.1 4.9 0 .075 2.293 2.107 3.491 3.169ZM7 13.7l-3.4-3C2.6 9.7 2 8.4 2 7c0-2.8 2.2-4.9 5-4.9s5 2.2 5 5c0 1.4-.6 2.6-1.6 3.6l-3.4 3ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
//                   </svg>
//                   <div className="text-sm text-gray-200">
//                     London, SW1Y 4AH, UK
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import PageHeader from './page-header';
import {sendContactForm} from '../services/index';
import Notiflix from 'notiflix';

export default function Contact() {
  const { theme, setTheme } = useTheme();

  // Set the theme to 'dark' whenever the component is mounted
  useEffect(() => {
    if (theme !== 'dark') {
      setTheme('dark');
    }
  }, [theme, setTheme]);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    updates: false, // for the checkbox field
  });

  // Handler to capture form data changes
  const handleInputChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handler for form submission
  const handleSubmit =  async (e:any) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can perform further actions like sending the data to an API endpoint here

    const res = await sendContactForm({
      name: formData.name,
      email: formData.email,
      comment: formData.message,
      phone: formData.phone
    });

    if(res === 0) {
    setFormData({
      name: "",
      email: "",
      message: "",
      phone: "",
      updates: false
    })
    Notiflix.Notify.success("Comment Saved Successfully")
    } else {
      Notiflix.Notify.failure("Comment Sending Failed. Try Again")
    }
    console.log(res, "------Res------")
  };

  return (
    <section>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12 md:mb-20"
            title="Get in touch"
            description="Fill out the form below to set up a call, or keep reading to get in touch with us for customer support, partnerships, or media enquiries."
          />

          {/* Contact form */}
          <div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] before:shadow-none after:h-px after:w-full after:border-b after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] after:shadow-none mb-16 pb-3">
            <div className="w-full max-w-xs mx-auto shrink-0">
              <form className="relative" onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div className="space-y-3">
                    <div>
                      <label className="sr-only" htmlFor="name">Name</label>
                      <div className="relative">
                        <input
                          id="name"
                          name="name"
                          className="form-input text-sm w-full pl-10 pr-4"
                          type="text"
                          placeholder="Your name..."
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="email">Email</label>
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          className="form-input text-sm w-full pl-10 pr-4"
                          type="email"
                          placeholder="Your email..."
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="Phone Number">Name</label>
                      <div className="relative">
                        <input
                          id="phone"
                          name="phone"
                          className="form-input text-sm w-full pl-10 pr-4"
                          type="text"
                          placeholder="Your Phone Number..."
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea text-sm w-full resize-none"
                        placeholder="Your message..."
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="updates"
                          className="form-checkbox"
                          checked={formData.updates}
                          onChange={handleInputChange}
                        />
                        <span className="text-sm text-gray-500 ml-2">
                          I'd like to receive updates &amp; product news.
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <button className="btn text-gray-800 bg-gray-100 hover:bg-white w-full">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
