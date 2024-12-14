"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { profile } from "console";
import Button from "../components/ui/Button";
import { redirect } from "next/navigation";
import Link from "next/link";

const promoImages = [
  "/images/promo1.jpg", // Replace with actual image paths
  "/images/promo2.jpg",
  "/images/promo3.jpg",
];

export default function LoginPage() {
  const [login, setLogin] = useState(true);
  const [profile, setProfile] = useState([
    {
      label: "Email address",
      key: "email",
      defaultValue: "",
      type: "text",
      placeholder: "Email address",
    },
    {
      label: "Password",
      key: "password",
      defaultValue: "",
      type: "password",
      placeholder: "Password",
    },
  ]);

  const [forgot, setForgot] = useState([
    {
      label: "Email address",
      key: "email",
      defaultValue: "demo@gmail.com",
      type: "text",
      placeholder: "Email address",
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [messages, setMessages] = useState([
    "Unlock your potential and achieve greatness.",
    "Every login is a step closer to your goals.",
    `Innovation starts here. Let's make it happen.`,
  ]);

  // Auto-slide functionality (optional)
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % promoImages.length);
  };

  // Move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen w-screen">
      <div className="h-screen bg-blue-50 w-[50%] flex flex-col justify-center items-center">
        <h1 className=" font-sans text-lg italic my-8">
          " {messages[currentSlide]} "
        </h1>

        <Image
          src={`/slider${currentSlide}.png`}
          alt=""
          width={500}
          height={200}
        />

        <div className="flex gap-2 justify-center items-center my-8">
          {promoImages.map((s, i) => (
            <div
              key={i}
              className={`${
                i == currentSlide ? "bg-primary-800" : "bg-primary-100"
              } w-[50px] h-[5px] block rounded`}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[50rem]">
        <div className="flex flex-col w-[70%] p-6">
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image src="/logo.png" height={50} width={200} alt="Logo" />
            <p className="my-2">Let's build something great</p>
          </div>

          {login && (
            <>
              <div className="my-2">
                {profile.map((field) => (
                  <div className="flex flex-col py-2" key={field.key}>
                    <div className="py-1">{field.label}</div>
                    <div>
                      <input
                        className="w-full p-2 border rounded h-[2.5rem]"
                        type={field.type}
                        defaultValue={field.defaultValue}
                        placeholder={field.placeholder}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm py-2">
                Forgot Password ?{" "}
                <span
                  className="text-primary-800"
                  role="button"
                  onClick={() => setLogin(false)}
                >
                  Click here
                </span>
                <Button
                  theme={"primary"}
                  className="w-full my-2"
                  onClick={() => redirect("/dashboard")}
                >
                  Login
                </Button>
              </p>
            </>
          )}

          {!login && (
            <>
              <div className="my-2">
                {forgot.map((field) => (
                  <div className="flex flex-col py-2" key={field.key}>
                    <div className="py-1">{field.label}</div>
                    <div>
                      <input
                        className="w-full p-2 border rounded h-[2.5rem]"
                        type={field.type}
                        defaultValue={field.defaultValue}
                        placeholder={field.placeholder}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm py-2">
                Enter the OTP sent to de****@gmail.com
              </p>
              <div className="flex gap-3 p-2 px-8">
                <input
                  className="w-full p-2 border rounded h-[2.5rem]"
                  type="text"
                />
                <input
                  className="w-full p-2 border rounded h-[2.5rem]"
                  type="text"
                />
                <input
                  className="w-full p-2 border rounded h-[2.5rem]"
                  type="text"
                />
                <input
                  className="w-full p-2 border rounded h-[2.5rem]"
                  type="text"
                />
              </div>
              <p className="text-sm py-2">
                Resend OTP ?
                <span
                  className="text-primary-800 ml-1"
                  role="button"
                  onClick={() => null}
                >
                  Click here
                </span>
                
                <p className="py-2">
                  Back to Login ?
                  <span
                    className="text-primary-800 ml-1"
                    role="button"
                    onClick={() => setLogin(true)}
                  >
                    Click here
                  </span>
                </p>
                <Button
                  theme={"primary"}
                  className="w-full my-2"
                  onClick={() => redirect("/dashboard")}
                >
                  Verify
                </Button>
              </p>
            </>
          )}

          <div className="flex flex-col justify-end my-2">
            <div className="text-sm text-center mt-2 text-gray-800">
              or do it via other accounts
            </div>

            <div className="flex gap-4">
              <Button className="w-full my-2 bg-red-400 text-white border-red-400 hover:bg-red-700">
                Google
              </Button>
              <Button className="w-full my-2 bg-blue-400 text-white border-blue-400 hover:bg-blue-600">
                Facebook
              </Button>
            </div>

            <div className="text-xs text-gray-600 flex justify-center items-center gap-2 py-4 mt-10">
              <Link href={""}>Privacy Policy</Link>
              <div className="h-4 w-px bg-gray-200"></div>
              <Link href={""}>Terms & Conditions</Link>
              <div className="h-4 w-px bg-gray-200"></div>
              <Link href={""}>Security Tips</Link>
              <div className="h-4 w-px bg-gray-200"></div>
              <Link href={""}>Client Charter</Link>
              <div className="h-4 w-px bg-gray-200"></div>
              <Link href={""}>FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
