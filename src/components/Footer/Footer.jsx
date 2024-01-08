import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900 m-0 p-0">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img src="data:image/png;base64,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" className="h-8 me-3" alt="FlowBite Logo" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}
