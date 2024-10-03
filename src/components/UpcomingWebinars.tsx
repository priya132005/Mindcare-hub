'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Coping with Anxiety',
      description:
        'Join us for a discussion on effective strategies to manage anxiety and improve mental wellness.',
      slug: 'coping-with-anxiety',
      isFeatured: true,
    },
    {
      title: 'Understanding Depression',
      description:
        'Learn about the signs, symptoms, and treatments for depression from mental health professionals.',
      slug: 'understanding-depression',
      isFeatured: true,
    },
    {
      title: 'Mindfulness and Meditation',
      description:
        'Discover mindfulness techniques and guided meditation to enhance your mental clarity and emotional stability.',
      slug: 'mindfulness-and-meditation',
      isFeatured: true,
    },
    {
      title: 'Building Resilience',
      description:
        'Explore ways to develop resilience and cope with life’s challenges effectively.',
      slug: 'building-resilience',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Navigating Stress',
      description:
        'Learn practical skills to manage stress in everyday life through expert-led discussions.',
      slug: 'navigating-stress',
      isFeatured: true,
    },
    {
      title: 'Support Systems for Mental Health',
      description:
        'Understand the importance of support systems and how to create a strong network for mental well-being.',
      slug: 'support-systems-for-mental-health',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-teal-600 uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">Enhance Your Mental Well-Being</p>
        </div>

        <div className="mt-10">
          <HoverEffect
           items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: `/webinars/${webinar.slug}` // Updated to link to the respective webinar slug
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/webinars"}
          className="px-4 py-2 transition duration-200 bg-white border rounded border-neutral-600 text-neutral-700 hover:bg-gray-100"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars;
