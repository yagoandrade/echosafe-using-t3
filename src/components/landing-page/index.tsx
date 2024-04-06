"use client";
import localFont from "next/font/local";
import Image, { type StaticImageData } from "next/image";

import LandingPageImage1 from "@/../public/assets/images/landing-page-image-1.png";

import LandingPageGradientBackground from "./gradient_background";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import LaurelRatings from "../shared/laurel-ratings";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import GoogleLogo from "@/../public/assets/svg/google-wordmark.svg";
import CourseraLogo from "@/../public/assets/svg/coursera.svg";
import UdemyLogo from "@/../public/assets/svg/Udemy_light.svg";
import GithubLogo from "@/../public/assets/svg/github-wordmark.svg";
import IBMLogo from "@/../public/assets/svg/ibm.svg";
import CloudflareLogo from "@/../public/assets/svg/cloudflare.svg";

const recoletaBlack = localFont({
  src: "../../../public/assets/fonts/recoleta/recoleta-black.woff2",
  display: "swap",
});

const LandingPage = () => {
  return (
    <>
      <LandingPageGradientBackground />
      <main className="space-y-8 px-4 py-12">
        <section className="grid grid-cols-1 items-center gap-4 lg:grid-cols-12">
          <div className="col-span-6 space-y-6 opacity-90">
            <div className="space-y-3.5">
              <LaurelRatings />
              <h1 className="text-5xl font-bold">
                School safety, reinvented for{" "}
                <span style={recoletaBlack.style}>students</span> and{" "}
                <span style={recoletaBlack.style}>institutions</span>
              </h1>
              <h3 className="font-medium">
                Join EchoSafe®&apos;s mission to create safe and inclusive
                learning spaces. With our advanced tools for directors,
                coordinators, and psychologists to not only detect bullying, but
                also act effectively to prevent it.
              </h3>
              {/* <PayingUsersAvatar /> */}
              <div className="space-y-2 text-lg">
                <p>
                  💬 <u>100% Anonymous reporting</u> for all students
                </p>
                <p>
                  🤖 <u>Respond better to students</u> with a specialized AI to
                  auxiliate you
                </p>
                <p>
                  ❤️ <u>Get Psychological support</u> for impacted victims
                </p>
                {/* <p>
                  ❤️ <u>Identify the signs, mitigate risks,</u> and be proactive
                  in protecting each student
                </p> */}
                <p>
                  📈 <u>Keep track of recent occurrences</u> and talk directly
                  to the students involved
                </p>
                <p>
                  🌎 <u>Join EchoSafe® chat</u> and link with other schools
                  leading the future
                </p>
              </div>
            </div>

            <div className="space-y-2 lg:space-x-3 lg:space-y-0">
              <Button variant="provider" className="w-full lg:w-fit" asChild>
                <Link href="/api/auth/register">
                  Make My Students Safer Now
                  <ChevronRight size="1rem" strokeWidth="0.1rem" />
                </Link>
              </Button>
              <Button variant="link" className="w-full lg:w-fit" asChild>
                <a href="mailto:contact@echosafe.org">
                  Talk To Our Specialists
                  <ChevronRight size="1rem" strokeWidth="0.1rem" />
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:col-span-6 lg:flex">
            <Image
              src={LandingPageImage1}
              alt="EchoSafe.org"
              draggable={false}
            />
          </div>
        </section>

        <section>
          <Card className="my-4 rounded-2xl bg-white shadow-lg">
            <CardHeader className="text-start">
              <CardTitle className="text-base font-light text-[#656565]">
                Trusted by students and institutions worldwide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mx-auto grid max-w-3xl gap-6 text-center text-center grayscale md:gap-8 lg:max-w-none lg:grid-cols-6">
                <Image
                  className="mx-auto my-auto h-auto max-h-[50px] w-fit max-w-[150px] object-contain"
                  src={GoogleLogo as StaticImageData}
                  alt=""
                />
                <Image
                  src={CourseraLogo as StaticImageData}
                  alt=""
                  className="mx-auto my-auto h-auto w-fit max-w-[150px] object-contain"
                />
                <Image
                  src={UdemyLogo as StaticImageData}
                  alt=""
                  className="mx-auto my-auto h-auto w-fit max-w-[150px] object-contain"
                />
                <Image
                  src={GithubLogo as StaticImageData}
                  alt=""
                  className="mx-auto my-auto h-auto w-fit max-w-[150px] object-contain"
                />
                <Image
                  src={IBMLogo as StaticImageData}
                  alt=""
                  className="mx-auto my-auto h-auto w-fit max-w-[150px] object-contain"
                />
                <Image
                  src={CloudflareLogo as StaticImageData}
                  alt=""
                  className="mx-auto my-auto h-auto w-fit max-w-[150px] object-contain"
                />
              </div>

              {/*
              // SOCIAL PROOF
              <div className="mx-auto grid max-w-3xl gap-6 text-center md:gap-8 lg:max-w-none lg:grid-cols-3 lg:grid-rows-2">
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400 md:text-base/relaxed">
                    Great company to work for. The environment is incredibly
                    collaborative and supportive. I feel valued and inspired
                    every day.
                  </p>
                  <div className="font-medium not-italic">
                    Samantha Thompson
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Product Manager
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400 md:text-base/relaxed">
                    The leadership team truly cares about the well-being of the
                    employees. It's refreshing to be part of a company that
                    prioritizes work-life balance and professional growth.
                  </p>
                  <div className="font-medium not-italic">Alex Walker</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Software Engineer
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400 md:text-base/relaxed">
                    I've been with the company for over five years, and I'm
                    still excited to come to work every morning. The culture of
                    innovation and the emphasis on continuous learning make this
                    a fantastic place to grow my career.
                  </p>
                  <div className="font-medium not-italic">Emily Parker</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Marketing Specialist
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400 md:text-base/relaxed">
                    The company's commitment to diversity and inclusion is
                    evident in every aspect of our work. I feel empowered to
                    bring my authentic self to the table, knowing that my
                    contributions are valued.
                  </p>
                  <div className="font-medium not-italic">Malik Johnson</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    HR Business Partner
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400 md:text-base/relaxed">
                    As a remote team member, I appreciate the company's
                    investment in technology that enables seamless
                    collaboration. I always feel connected to my colleagues, no
                    matter where I'm working from.
                  </p>
                  <div className="font-medium not-italic">Liam Garcia</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    UX Designer
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400 md:text-base/relaxed">
                    The company's dedication to customer satisfaction is
                    inspiring. I'm proud to be part of a team that goes above
                    and beyond to deliver excellence.
                  </p>
                  <div className="font-medium not-italic">Sophie Lee</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Customer Success Manager
                  </div>
                </div>
              </div> */}
            </CardContent>
          </Card>
        </section>

        

        <section className="flex w-full flex-col items-center justify-center gap-y-16 py-12">
          <span className="space-y-3 text-center text-6xl font-light leading-10">
            <h3>Ready for the future of safety?</h3>
            <p>Available today.</p>
          </span>
          <Button
            variant="provider"
            className="w-full rounded-full text-lg font-normal lg:w-fit"
            asChild
          >
            <Link href="/api/auth/register">Get started on EchoSafe®</Link>
          </Button>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
