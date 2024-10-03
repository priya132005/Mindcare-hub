'use client';
import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import courseData from '@/data/all_courses.json';

function Page() {
  return (
    <div className="min-h-screen py-12 bg-black pt-36">
      <h1 className="mb-8 font-sans text-lg font-bold text-center text-white md:text-7xl">
        All resourses ({courseData.resources.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        {courseData.resources.map((course) => (
          <CardContainer key={course.id} className="m-4 inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="max-w-sm mt-2 text-sm text-neutral-500 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image || '/fallback-image.jpg'} // Fallback image path
                  height="1000"
                  width="1000"
                  className="object-cover w-full h-60 rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </CardItem>
              <div className="flex items-center justify-between mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 text-xs font-normal rounded-xl dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 text-xs font-bold text-white bg-black rounded-xl dark:bg-white dark:text-black"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default Page;
