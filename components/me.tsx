import Image from "next/image";
import SocialMedia from "./social-media";

export default function Me() {
  return (
    <section className="w-full py-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold leading-tight">
            Hi, I&apos;m Afiq
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-4">
            I&apos;m a software engineer who enjoys building backend systems,
            cloud setups, and the occasional machine learning experiment. I like
            creating clean, efficient systems with a touch of curiosity.
          </p>
          <SocialMedia />
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/profile.jpg"
            alt="Afiq"
            width={200}
            height={200}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
