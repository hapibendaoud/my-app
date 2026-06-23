import Marquee from "@/components/animata/container/marquee";
import Image from "next/image";

interface member {
  name: string;
  age: number;
  image: string;
  description: string;
}

interface TestimonialProps {
  data: member[];
}

function TeamMemberCard({
  members: { image, name, age, description },
}) {
  return (
    <div className="grid grid-cols-3  h-70 w-150 gap-4 rounded-2xl overflow-hidden border border-gray-400 bg-gray-200 p-2 dark:border-zinc-700 dark:bg-slate-900 shrink-0 mx-2">
      <div className="relative w-full h-full rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={200}
          height={300}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-zinc-50">
          {name} ({age})
        </h2>
        <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ScrollingTestimonials({ data }: TestimonialProps) {
  return (
    <div className="w-full flex flex-col gap-4 py-6 overflow-hidden">
      <Marquee className="[--duration:25s]" pauseOnHover applyMask={false}>
        {data.map((member) => (
          <TeamMemberCard key={member.name} members={member} />
        ))}
      </Marquee>

      <Marquee reverse className="[--duration:25s]" pauseOnHover applyMask={false}>
        {data.map((member) => (
          <TeamMemberCard key={member.name} members={member} />
        ))}
      </Marquee>

      <Marquee className="[--duration:25s]" pauseOnHover applyMask={false}>
        {data.map((member) => (
          <TeamMemberCard key={member.name} members={member} />
        ))}
      </Marquee>
    </div>
  );
}
