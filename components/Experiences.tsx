'use client';
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard';
import { ExperienceHardCoded } from '@/type';

type Props = {}

export default function Experiences({ }: Props) {
  const experience: ExperienceHardCoded[] = [
    {
      "_id": "d11555e2-6744-4b51-8d26-2d3366e26852",
      "jobTitle": "Full-Stack Developer",
      "company": "Upwork",
      "dateStarted": "2023-06-01",
      "dateEnded": null,
      "companyImage": "/upwork.png",
      "points": [
        "Develop end-to-end web solutions, taking ownership of both front-end and back-end development tasks.",
        "Collaborate closely with clients to understand their requirements and deliver custom web applications that meet their needs.",
        "Ensure seamless integration of user interfaces with server-side functionalities for a cohesive user experience.",
        "Manage project timelines, budgets, and deliverables independently, providing regular updates and maintaining clear communication with clients.",
        "Stay updated with the latest web development technologies and trends to deliver cutting-edge solutions that exceed client expectations."
      ],
    },
    {
      "_id": "09f81179-75ba-4fbe-9387-1ba59b2f9435",
      "jobTitle": "Full-Stack Developer",
      "company": "Fiverr",
      "dateStarted": "2023-06-01",
      "dateEnded": null,
      "companyImage": "/fiverr.png",
      "points": [
        "Develop end-to-end web solutions, taking ownership of both front-end and back-end development tasks.",
        "Collaborate closely with clients to understand their requirements and deliver custom web applications that meet their needs.",
        "Ensure seamless integration of user interfaces with server-side functionalities for a cohesive user experience.",
        "Manage project timelines, budgets, and deliverables independently, providing regular updates and maintaining clear communication with clients.",
        "Stay updated with the latest web development technologies and trends to deliver cutting-edge solutions that exceed client expectations."
      ],
    },
    {
      "_id": "aaaf56b7-9368-42c9-a461-095dd8881c8a",
      "jobTitle": "Full-Stack Developer",
      "company": "tarekmia.com",
      "dateStarted": "2021-08-01",
      "dateEnded": null,
      "companyImage": "/T-rounded.png",
      "points": [
        "Develop and maintain both front-end and back-end components of websites and web applications.",
        "Create responsive and visually appealing user interfaces.",
        "Implement server-side logic and database interactions for seamless functionality.",
        "Optimize website performance and ensure compatibility across different browsers and devices.",
        "Integrate external APIs and third-party services to enhance functionality and user experience.",
        "Conduct thorough testing and debugging to identify and resolve issues in the codebase."
      ]
    },
    {
      "_id": "a34f0dcf-7bbe-4a7c-9fc3-efcb23d5e571",
      "jobTitle": "Front-end Developer",
      "company": "3Devs IT Limited",
      "dateStarted": "2021-02-01",
      "dateEnded": "2021-06-30",
      "companyImage": "/3dev-icon.png",
      "points": [
        "Develop visually appealing and responsive user interfaces.",
        "Ensure cross-browser and cross-device compatibility for seamless user experience.",
        "Implement interactivity and dynamic functionality using JavaScript frameworks and libraries.",
        "Optimize website performance by optimizing code, images, and assets.",
        "Maintain and update existing front-end codebases to improve performance and user experience.",
        "Stay updated with the latest front-end development trends and best practices."
      ],
    },
    {
      "_id": "2981e073-a4c8-479c-bb02-fdcc46874aed",
      "jobTitle": "Front-end Developer",
      "company": "@SixtynineDirectories",
      "dateStarted": "2022-01-01",
      "dateEnded": null,
      "companyImage": "/69.jpg",
      "points": [
        "Develop visually appealing and responsive user interfaces.",
        "Ensure cross-browser and cross-device compatibility for seamless user experience.",
        "Implement interactivity and dynamic functionality using JavaScript frameworks and libraries.",
        "Optimize website performance by optimizing code, images, and assets.",
        "Maintain and update existing front-end codebases to improve performance and user experience.",
        "Stay updated with the latest front-end development trends and best practices."
      ],
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 1 }}
      viewport={{ once: true, }}
      className='min-h-screen flex flex-col relative text-center md:text-left max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl 2xl:text-2xl'>Experience</h3>
      <div className='w-full flex space-x-5 md:space-x-8 xl:space-x-10 2xl:space-x-14 overflow-x-auto p-10 mb-24 snap-x snap-mandatory snap-always scrollbar-thin xl:scrollbar-none hover:scrollbar-thin scrollbar-track-[#14121c] scrollbar-thumb-[#7928ca] scrollbar-corner-[#7928ca] scrollbar-thumb-rounded-xl'>
        {experience?.map((exp) => (
          <ExperienceCard key={exp._id} experiences={exp} />
        ))}
      </div>
    </motion.div>
  )
}