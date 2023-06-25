'use client';
import { motion } from 'framer-motion'
import Skill from './Skill';
import { SkillHardCoded } from '@/type';

type Props = {}

export default function Skills({ }: Props) {

  const skills: SkillHardCoded[] = [
    {
      "image": "/typescript.png",
      "_id": "cce73af9-c51d-455d-bc85-b4199e0a09b4",
      "title": "TypeScript",
      "progress": 75
    },
    {
      "title": "JavaScript",
      "progress": 80,
      "image": "/logo-javascript.png",
      "_id": "35f0401e-5690-4dcc-92c8-565913cbedc3"
    },
    {
      "_id": "f534c3d4-0cf3-4dd8-bbaf-1a95a12a9d56",
      "title": "PHP",
      "progress": 85,
      "image": "/php-logo-white.png"
    },
    {
      "_id": "3f7930f6-08e2-4680-b9cb-329af312168c",
      "title": "MySQL",
      "progress": 75,
      "image": "/mySQL.png"
    },
    {
      "_id": "8b53d09c-714d-47f0-8215-32365efddf3d",
      "title": "Node JS",
      "progress": 75,
      "image": "/node-alt.png"
    },
    {
      "_id": "089df5af-0d11-4333-835a-d5885d7d70c1",
      "title": "Next JS",
      "progress": 80,
      "image": "/next-alt.png"
    },
    {
      "_id": "1b51a9d0-21ce-4daa-97ee-1b4edaf7d9ee",
      "title": "Vercel",
      "progress": 85,
      "image": "/vercel.png"
    },
    {
      "_id": "00aeb06a-d761-4bb2-ad6a-25efed03f2f7",
      "title": "SANITY",
      "progress": 80,
      "image": "/sanity.png"
    },
    {
      "title": "JQuery",
      "progress": 90,
      "image": "/jquery-alt.png",
      "_id": "f34e1cb0-ee26-4a7a-9c21-41d6b27615b3"
    },
    {
      "title": "React",
      "progress": 80,
      "image": "/react-2.png",
      "_id": "58221c20-a7f7-43a8-aeb8-d00810b08877"
    },
    {
      "progress": 95,
      "image": "/html.png",
      "_id": "a03da042-fedd-4912-a281-0ecd71056f8a",
      "title": "HTML5"
    },
    {
      "_id": "6749ee8e-b1c0-41a9-be69-6e46ccee7a7c",
      "title": "CSS3",
      "progress": 95,
      "image": "/css-3.png",
    },
    {
      "_id": "aeccfac5-e01a-45c2-b8e3-a9df50a8acd7",
      "title": "TailwindCSS",
      "progress": 95,
      "image": "/tailwind-css-2.png"
    },
    {
      "title": "Bootstrap 5",
      "progress": 95,
      "image": "/bootstrap-5-1.png",
      "_id": "6dfd1532-df82-43d3-b11c-e2020be73c23"
    },
    {
      "_id": "6a64908b-fcc3-4653-8ef5-1a2d30b40570",
      "title": "Photoshop",
      "progress": 85,
      "image": "/adobe-photoshop-2.png"
    },
    {
      "progress": 90,
      "image": "/adobe-illustrator-cc-icon.png",
      "_id": "fd4ce817-b3d6-449e-a0fb-25b96ed4093b",
      "title": "Illustrator"
    },
    {
      "title": "Terminal",
      "progress": 85,
      "image": "/terminal-1.png",
      "_id": "drafts.4a493045-cd09-486c-bbc2-45d4da57a8aa"
    },
    {
      "_id": "a1519c98-2f4a-4a6c-85f9-825b1acde582",
      "title": "npm",
      "progress": 90,
      "image": "/npm.png"
    },
    {
      "progress": 85,
      "image": "/yarn.png",
      "_id": "a023b888-ba83-4891-8716-4c054d6b8bcc",
      "title": "Yarn"
    },
    {
      "progress": 95,
      "image": "/vscode.png",
      "_id": "c6b45188-3ab9-4d86-8e7a-930e5415c977",
      "title": "VS Code"
    },
    {
      "image": "/git-icon.png",
      "_id": "ccdd598e-3361-4c99-b96f-4d171980df47",
      "title": "Git",
      "progress": 85
    },
    {
      "image": "/github-icon-1.png",
      "_id": "5df84026-1047-48a2-9477-9aebfc9ec8bb",
      "title": "GitHub",
      "progress": 85
    },
    {
      "_id": "8337eeae-6931-45f1-a30d-ac476715fa5e",
      "title": "DigitalOccean",
      "progress": 85,
      "image": "/digitalocean-icon-1.png"
    },
    {
      "progress": 90,
      "image": "/office-1.png",
      "_id": "accfe2fb-631c-4674-bf24-8152c52fac1e",
      "title":
        "Office"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}

      className='mb-24 min-h-screen flex flex-col relative text-center min-w-[360px] max-w-full xl:px-10 justify-start mx-auto items-center'>
      <div className='relative top-20 md:top-24 flex flex-col text-center max-w-full justify-center space-y-6 '>
        <h3 className='uppercase tracking-[20px] text-gray-500 text-xl 2xl:text-2xl'>skills</h3>
        <h3 className='uppercase tracking-[3px] text-gray-500 text-sm md:text-md xl:text-xl 2xl:text-2xl'>My vast variety of skills is continously expanding</h3>
      </div>
      <div className='grid grid-cols-4 md:grid-cols-6 gap-5 mt-32 xl:mt-40'>
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
      <small className='mb-24 mt-10 tracking-wider text-gray-500'>Hover or tap on Skills to see current proficiency.</small>
    </motion.div>
  )
}