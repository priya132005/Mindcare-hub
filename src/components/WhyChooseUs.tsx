"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const mentalHealthContent = [
    {
      title: 'Embark on Your Mental Wellness Journey with Us',
      description:
        'Begin a transformative journey toward mental wellness with our supportive community. Our personalized approach caters to your unique needs, fostering an environment where you can thrive and heal. Together, we create a safe space for your growth and self-discovery.',
    },
    {
      title: 'Expert Guidance & Support',
      description:
        'Experience the benefit of real-time feedback and professional guidance in your mental health journey. Our qualified professionals are here to provide insights and support, ensuring you feel empowered every step of the way.',
    },
    {
      title: 'Holistic Approaches to Mental Health',
      description:
        'Our platform integrates various therapeutic approaches, including mindfulness, cognitive behavioral techniques, and self-care strategies. We believe in a comprehensive approach to mental health that promotes overall well-being.',
    },
    {
      title: 'Cutting-Edge Resources',
      description:
        'Access a wealth of up-to-date resources that reflect the latest trends and research in mental health care. We prioritize evidence-based practices to ensure you receive the most effective support available.',
    },
    {
      title: 'Limitless Learning and Growth Opportunities',
      description:
        'With a vast library of courses, webinars, and community discussions, you’ll always have new opportunities to learn and grow. Our platform fosters continuous development, ensuring you are equipped with the tools for ongoing mental health improvement.',
    },
    {
      title: 'Community and Connection',
      description:
        'Join a supportive community where you can share your experiences, connect with others, and feel understood. Our platform is designed to build connections that enhance your mental health journey, making you feel less alone in your struggles.',
    },
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={mentalHealthContent} />
    </div>
  )
}

export default WhyChooseUs;
