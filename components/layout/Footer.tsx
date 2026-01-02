"use client";
import { aboutLinks, communityLinks, socialLinks } from "@/lib/constant";
import Link from "next/link";
import { useState } from "react";
import FooterSkeleton from "../shared/FooterSkeleton";

const Footer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div className="bg-page sm:bg-white! sm:pt-8 lg:pt-20 px-6 lg:px-[60px]">
      {isLoading ? (
        <FooterSkeleton />
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="max-w-[280px] ">
              <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-primary">
                MORENT
              </h1>
              <p className="text-body text-[12px] sm:text-sm lg:text-[16px]">
                Our vision is to provide convenience and help increase your
                sales business.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap  sm:justify-center gap-12 sm:space-x-[110px] md:space-x-[30px] lg:space-x-[60px] mr-2 sm:mr-8 lg:mr-20">
              {/* About */}
              <div>
                <h2 className="text-heading text-xl font-semibold">About</h2>
                <div className="flex flex-col gap-3 mt-6">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      className="text-body text-[16px] hover:text-gray-800!"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Community */}
              <div>
                <h2 className="text-heading text-xl font-semibold">
                  Community
                </h2>
                <div className="flex flex-col gap-3 mt-6">
                  {communityLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      className="text-body text-[16px] hover:text-gray-800!"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div>
                <h2 className="text-heading text-xl font-semibold">Socials</h2>
                <div className="flex flex-col gap-3 mt-6">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      className="text-body text-[16px] hover:text-gray-800!"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <span className="border-devider hidden sm:flex border mt-10" />

          <div className="text-heading text-[12px] sm:text-[16px] font-semibold mt-6 pb-12 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            <p>©2022 MORENT. All rights reserved</p>

            <div className="flex gap-6 sm:gap-10">
              <span className="text-[12px] sm:text-[16px]">
                Privacy & Policy
              </span>
              <span className="text-[12px] sm:text-[16px]">
                Terms & Condition
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
