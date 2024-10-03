'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const mentalHealthTestimonials = [
    {
      quote:
        'This platform helped me understand my mental health better and provided me with the tools to cope with anxiety. I’m forever grateful!',
      name: 'Ava Martinez',
      title: 'Community Member',
    },
    {
      quote:
        "The resources and support offered here are life-changing. I found a safe space to share my experiences and grow as a person.",
      name: 'Liam Smith',
      title: 'Peer Supporter',
    },
    {
      quote:
        "I had been struggling with depression for years, but the expert advice and guided meditations made a significant difference in my life.",
      name: 'Noah Brown',
      title: 'User',
    },
    {
      quote:
        'Finding a community that understands mental health challenges has been a relief. This platform truly cares about its members.',
      name: 'Emma Johnson',
      title: 'Mental Health Advocate',
    },
    {
      quote:
        'The mood tracker and self-help resources helped me recognize patterns in my feelings. Highly recommend this site to anyone seeking support!',
      name: 'Olivia Davis',
      title: 'Regular User',
    },
];

function MentalHealthTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="z-10 mb-8 text-3xl font-bold text-center">Voices of Strength: Real Stories of Support</h2>
        <div className="flex justify-center w-full px-4 overflow-hidden sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
             items={mentalHealthTestimonials}
             direction="right"
             speed="slow"
            />
            </div>
        </div>
    </div>
  )
}

export default MentalHealthTestimonials;
