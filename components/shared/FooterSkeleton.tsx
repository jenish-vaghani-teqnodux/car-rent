import React from "react";
import LineSkeleton from "./LineSkeleton";
import { aboutLinks, communityLinks, socialLinks } from "@/lib/constant";

const FooterSkeleton = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="space-y-2">
          <LineSkeleton variant="primary" />
          <LineSkeleton variant="secondary" />
        </div>

        <div className="flex space-x-[60px]">
          {/* About */}
          <div>
            <LineSkeleton variant="primary" />
            <div className="flex flex-col gap-5 mt-8">
              {aboutLinks.map((link) => (
                <LineSkeleton variant="secondary" key={link.name} />
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <LineSkeleton variant="primary" />
            <div className="flex flex-col gap-5 mt-8">
              {communityLinks.map((link) => (
                <LineSkeleton variant="secondary" key={link.name} />
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <LineSkeleton variant="primary" />
            <div className="flex flex-col gap-5 mt-8">
              {socialLinks.map((link) => (
                <LineSkeleton variant="secondary" key={link.name} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <span className="flex border border-devider mt-10" />

      <div className="mt-6 mb-12 flex justify-between">
        <LineSkeleton variant="primary" />

        <div className="space-x-10 flex">
          <LineSkeleton variant="secondary" />
          <LineSkeleton variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default FooterSkeleton;
