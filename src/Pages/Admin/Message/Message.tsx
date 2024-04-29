function Message() {
  return (
    <div className="space-y-10">
      {/* title */}
      <div className="p-5 flex justify-center items-center gap-x-5">
        <div>
          <img className="w-20" src="/logo-squared.svg" alt="" />
        </div>
        <div>
          <h2 className="text-3xl text-primary font-extrabold leading-none tracking-tight">
            AngryGeek
          </h2>
        </div>
      </div>

      {/* message verify mail */}
      <div className="grid grid-cols-1 sm:grid-cols-5">
        {/* hidden */}
        <div className="hidden sm:block"></div>
        {/* content */}
        <div className="flex col-span-1 sm:col-span-3 justify-center shadow  bg-secondary/5">
          <div className="card font-mono">
            {/* <figure><img src="https://i.pravatar.cc/300" alt="Shoes" /></figure> */}
            <div className="card-body space-y-5">
              <div className="gap-2">
                <h2 className="card-title text-3xl font-extrabold leading-none tracking-tight">
                  Hello
                </h2>
                <h2 className="card-title text-4xl text-secondary font-extrabold leading-none tracking-tight">
                  You are almost there!!!
                </h2>
              </div>
              <div className="glass p-5 rounded shadow space-y-5">
                <p>
                  Verify your email address to finalize the creation of your
                  account.
                </p>
                <div className="btn-primary flex justify-center btn text-center">
                  Verify Your Mail Adress
                </div>
              </div>

              <div className="text-xs">
                The email address associated with your AG account needs to be
                verified in order for you to access AG features, the AG
                Community Marketplace, or exchanges. In addition, this will make
                it easier for you to recover your account in the future if
                necessary. Thank you for helping us verify the security of your
                new account. <br />- The AG Team <br />* If you haven't tried to
                create a new account with this email address recently, you can
                ignore this message.
              </div>
            </div>
          </div>
        </div>
        {/* hidden */}
        <div className="hidden sm:block"></div>
      </div>

      {/* message confirm pass */}
      <div className="grid grid-cols-1 sm:grid-cols-5">
        {/* hidden */}
        <div className="hidden sm:block"></div>
        {/* content */}
        <div className="flex col-span-1 sm:col-span-3 justify-center shadow  bg-secondary/5">
          <div className="card font-mono">
            {/* <figure><img src="https://i.pravatar.cc/300" alt="Shoes" /></figure> */}
            <div className="card-body space-y-5">
              <div className="gap-2">
                <h2 className="card-title text-3xl font-extrabold leading-none tracking-tight">
                  Hello
                  <span className="card-title text-4xl text-primary font-extrabold leading-none tracking-tight">
                    Test,
                  </span>
                </h2>
              </div>
              <div className="glass p-5 rounded shadow space-y-5">
                <div className="text-center">
                  <p>
                    Here is the AG Guard code you need to log into your account:
                  </p>
                </div>
                <div className="flex justify-center container">
                  <div className="font-extrabold text-3xl tracking-wide leading-none">
                    2556894
                  </div>
                  {/* <input type="text" placeholder="Type here" value={255555} className="flex input input-bordered input-secondary"/> */}
                </div>
              </div>

              <div className="text-xs">
                The AG code is required to log in. No one can access your
                account without access to this email. <br />
                If you did not initiate this request, please change your Steam
                password. We also recommend that you change your email password
                to ensure the security of your account. Sincerely, The Steam
                Team
              </div>
            </div>
          </div>
        </div>
        {/* hidden */}
        <div className="hidden sm:block"></div>
      </div>

      {/* order */}
      <div className="grid grid-cols-1 sm:grid-cols-5">
        {/* hidden */}
        <div className="hidden sm:block"></div>

        {/* content */}
        <div className="flex col-span-1 sm:col-span-3 justify-center shadow">
          <div className="card bg-base-100 shadow-xl">
            <div className="grid grid-cols-2">
              <div className="">
                <div className="card-body font-mono space-y-5">
                  <div className="space-y-2">
                    <h2 className="card-title text-3xl font-extrabold leading-none tracking-tight">
                      Thanks for{" "}
                      <span className="text-4xl text-secondary">ordering</span>
                    </h2>
                    <p>
                      Hello John Doe, Thanks for choosing us. Your order will be
                      processed withing 24hours. We Notify you by email once
                      your ordered has been shipped.
                    </p>
                  </div>

                  {/* content */}
                  <div className="space-y-5">
                    <h2 className="card-title text-primary">Order details</h2>
                    <hr className="flex justify-center border-0 border-t-2 border-secondary/40" />
                    <div className="flex justify-between">
                      <div className="flex-col">
                        <div>Order Number</div>
                        <div>3512</div>
                      </div>
                      <div className="flex-col">
                        <div>Order Date</div>
                        <div>29/04/2023</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex-col">
                        <div>Status</div>
                        <div>Paid</div>
                      </div>
                    </div>
                    <hr className="flex justify-center border-0 border-t-2 border-secondary/40" />
                  </div>

                  <div className="space-y-5">
                    <h2 className="card-title text-primary">
                      Customer details
                    </h2>
                    <div className="flex-col">
                      <div>Delivery adress</div>
                      <div>john Doe</div>
                      <div>Lot 03 10-36D SOaniadanana Sab/Nam 103</div>
                      <div> +261 34 00 000 00</div>
                    </div>
                  </div>

                  <div className="card-actions text-xl leading-none tracking-tight font-extrabold items-end text-primary flex justify-center py-5 px-2 rounded-lg bg-secondary/10">
                    Track your order
                  </div>
                </div>
              </div>
              <div className="p-5 m-5 shadow-sm bg-secondary/5 rounded">
                <div className="mt-5 sm:mt-16 space-y-5 relative overflow-x-auto">
                  <table className="w-full font-mono text-left">
                    <caption>Items </caption>
                    <thead className="uppercase bg-base">
                      <tr className="text-primary">
                        <th scope="col" className="px-6 py-3">
                          Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                          {/* Product */}
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <td className="w-28 p-4">
                          <img
                            src="https://i.pravatar.cc/300"
                            className="rounded"
                            alt="Apple Watch"
                          />
                        </td>
                        <td className="px-6 py-4 font-semibold text-base">
                          Apple Watch
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-base">
                          $599
                        </td>
                      </tr>
                      <tr className="">
                        <td className="w-28 p-4">
                          <img
                            src="https://i.pravatar.cc/300"
                            className="rounded"
                            alt="Apple Imac"
                          />
                        </td>
                        <td className="px-6 py-4 font-semibold text-base">
                          Imac 27"
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-base">
                          $2499
                        </td>
                      </tr>
                      <tr className="">
                        <td className="w-28 p-4">
                          <img
                            src="https://i.pravatar.cc/300"
                            className="rounded"
                            alt="Iphone 12"
                          />
                        </td>
                        <td className="px-6 py-4 font-semibold text-base">
                          Iphone 12
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-base">
                          $999
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr className="flex justify-center border-0 border-t-2 border-primary/40" />

                  <table className="w-full font-mono text-left">
                    <thead className="uppercase bg-base">
                      <tr className="">
                        <td className="px-6 py-4 font-semibold text-base">
                          Shipping
                        </td>
                        <td className="px-6 py-4 font-semibold text-base"></td>
                        <td className="px-6 py-4 text-right font-semibold text-base">
                          $999
                        </td>
                      </tr>
                      <tr className="">
                        <td className="px-6 py-4 font-semibold text-primary">
                          Total
                        </td>
                        <td className="px-6 py-4 font-semibold text-base"></td>
                        <td className="px-6 py-4 text-right font-semibold text-primary text-2xl">
                          $999
                        </td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hidden */}
        <div className="hidden sm:block"></div>
      </div>

      {/* footer */}
      <div className="grid grid-cols-1 sm:grid-cols-5">
        {/* hidden */}
        <div className="hidden sm:block"></div>
        <div className="col-span-1 sm:col-span-3">
          <footer className="bg-base-100 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0"
              viewBox="0 0 1440 320"
            >
              <path
                className="fill-primary/10"
                fill-opacity="1"
                d="M0,320L30,304C60,288,120,256,180,229.3C240,203,300,181,360,186.7C420,192,480,224,540,240C600,256,660,256,720,218.7C780,181,840,107,900,80C960,53,1020,75,1080,112C1140,149,1200,203,1260,197.3C1320,192,1380,128,1410,96L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              ></path>
            </svg>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                  <a href="https://flowbite.com/" className="flex items-center">
                    <img className="w-24" src="/logo-squared.svg" alt="" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                      App Name
                    </span>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase">
                      Resources
                    </h2>
                    <ul className="font-medium">
                      <li className="mb-4">
                        <a
                          href="https://flowbite.com/"
                          className="hover:underline"
                        >
                          <svg
                            className="w-5 sm:w-10"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                            />
                          </svg>
                          <svg
                            className="w-5 sm:w-10"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="24" height="24" fill="none" />
                            <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tailwindcss.com/"
                          className="hover:underline"
                        >
                          <svg
                            className="w-5 sm:w-10"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase">
                      Follow us
                    </h2>
                    <ul className="font-medium">
                      <li className="mb-4">
                        <a
                          href="https://github.com/themesberg/flowbite"
                          className="hover:underline "
                        >
                          Github
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://discord.gg/4eeurUVvTy"
                          className="hover:underline"
                        >
                          Discord
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase">
                      Legal
                    </h2>
                    <ul className="text-base  font-medium">
                      <li className="mb-4">
                        <a href="#" className="hover:underline">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline">
                          Terms &amp; Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="my-6 flex justify-center border-0 border-t-2 border-secondary/20" />
              <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm sm:text-center ">
                  Web©up 2023 - AngryGeek. Tous droits réservés.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                  <a href="#" className="text-base hover:text-gray-900">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Facebook page</span>
                  </a>
                  <a href="#" className="text-base hover:text-gray-900">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Instagram page</span>
                  </a>
                  <a href="#" className="text-base hover:text-gray-900">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    <span className="sr-only">Twitter page</span>
                  </a>
                  <a href="#" className="text-base hover:text-gray-900">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">GitHub account</span>
                  </a>
                  <a href="#" className="text-base hover:text-gray-900">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Dribbble account</span>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* hidden */}
        <div className="hidden sm:block"></div>
      </div>

      {/* footer */}
      <div className="grid grid-cols-1 sm:grid-cols-5">
        {/* hidden */}
        <div className="hidden sm:block"></div>
        <div className="col-span-1 sm:col-span-3 mb-2 mt-0 pt-0">
          <div className="text-center text-sm space-x-1">
            <span>This message is not displayed correctly? Please</span>
            <span
              id="lol"
              className="font-semibold cursor-pointer text-indigo-500 underline"
            >
              click
            </span>
            <span>here</span>
          </div>
        </div>
        {/* hidden */}
        <div className="hidden sm:block"></div>
      </div>
    </div>
  )
}
export default Message
