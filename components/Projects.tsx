'use client';
import { ProjectHardCoded } from '@/type';
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

export default function Projects({ }: Props) {
  const projects: ProjectHardCoded[] = [
    {
      "image": "/import-business-manager.png",
      "technologies": [


        {
          "_id": "f534c3d4-0cf3-4dd8-bbaf-1a95a12a9d56",
          "title": "PHP",
          "image": "/php-logo-white.png",
          "progress": 85
        },
        {
          "_id": "3f7930f6-08e2-4680-b9cb-329af312168c",
          "title": "MySQL",
          "image": "/mySQL.png",
          "progress": 75
        },
        {
          "progress": 80,
          "_id": "35f0401e-5690-4dcc-92c8-565913cbedc3",
          "title": "JavaScript",
          "image": "/logo-javascript.png"
        },
        {
          "_id": "f34e1cb0-ee26-4a7a-9c21-41d6b27615b3",
          "title": "JQuery",
          "image": "/jquery-alt.png",
          "progress": 90
        }, {
          "progress": 95,
          "_id": "a03da042-fedd-4912-a281-0ecd71056f8a",
          "title": "HTML5",
          "image": "/html.png"
        },
        {
          "_id": "6749ee8e-b1c0-41a9-be69-6e46ccee7a7c",
          "title": "CSS3",
          "image": "/css-3.png",
          "progress": 95
        },
        {
          "title": "Bootstrap 5",
          "image": "/bootstrap-5-1.png",
          "progress": 95,
          "_id": "6dfd1532-df82-43d3-b11c-e2020be73c23"
        },
        {
          "_id": "4a493045-cd09-486c-bbc2-45d4da57a8aa",
          "title": "Terminal",
          "image": "/terminal-1.png",
          "progress": 85
        },
        {
          "_id": "ccdd598e-3361-4c99-b96f-4d171980df47",
          "title": "Git",
          "image": "/git-icon.png",
          "progress": 85
        },
        {
          "_id": "c6b45188-3ab9-4d86-8e7a-930e5415c977",
          "title": "VS Code",
          "image": "/vscode.png",
          "progress": 95
        }
      ],
      "_id": "692803f4-91d2-40eb-b8cd-8b67100a1c61",
      "title": "Import-Wholesale Business Manager",
      "linkToBuild": "/",
      "summery": "I designed and developed an import-wholesale business management application. It features a captivating animated login page and offers a fully responsive user interface. With advanced security, multi-vendor management, and comprehensive reporting capabilities (including PDF, Excel, and print), it provides efficient data entry and a personalized customer dashboard."
    },
    {
      "image": "/tarekmia.png",
      "technologies": [
        {
          "_id": "cce73af9-c51d-455d-bc85-b4199e0a09b4",
          "title": "TypeScript",
          "image": "/typescript.png",
          "progress": 75
        },
        {
          "title": "Next JS",
          "image": "/next-alt.png",
          "progress": 80,
          "_id": "089df5af-0d11-4333-835a-d5885d7d70c1"
        },
        {
          "title": "React",
          "image": "/react-2.png",
          "progress": 80,
          "_id": "58221c20-a7f7-43a8-aeb8-d00810b08877"
        },
        {
          "_id": "aeccfac5-e01a-45c2-b8e3-a9df50a8acd7",
          "title": "TailwindCSS",
          "image": "/tailwind-css-2.png",
          "progress": 95
        },
        {
          "_id": "00aeb06a-d761-4bb2-ad6a-25efed03f2f7",
          "title": "SANITY",
          "image": "/sanity.png",
          "progress": 100
        },
        {
          "_id": "1b51a9d0-21ce-4daa-97ee-1b4edaf7d9ee",
          "title": "Vercel",
          "progress": 85,
          "image": "/vercel.png"
        },
        {
          "_id": "a023b888-ba83-4891-8716-4c054d6b8bcc",
          "title": "Yarn",
          "image": "/yarn.png",
          "progress": 85
        },
        {
          "_id": "ccdd598e-3361-4c99-b96f-4d171980df47",
          "title": "Git",
          "image": "/git-icon.png",
          "progress": 85
        },
        {
          "_id": "c6b45188-3ab9-4d86-8e7a-930e5415c977",
          "title": "VS Code",
          "image": "/vscode.png",
          "progress": 95
        }
      ],
      "_id": "c015d6ce-8b2a-473b-81ce-6caad98e89da",
      "title": "Tarek Mia's Portfolio",
      "linkToBuild": "/",
      "summery": "Introducing my minimalist and modern portfolio website—a meticulously designed showcase of my skills and experience. It features a single-page layout that seamlessly presents all essential information, from my works to contact details. Experience a focused and visually appealing presentation that embodies a minimalist approach."
    },
    {
      "image": "/24x7.png",
      "technologies": [
        {
          "_id": "0d558102-7c09-455a-bb12-6e6682a4dbd6",
          "title": "Python",
          "progress": 80,
          "image": "/python-5.png"
        },
        {
          "title": "JavaScript",
          "progress": 80,
          "image": "/logo-javascript.png",
          "_id": "35f0401e-5690-4dcc-92c8-565913cbedc3"
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
          "title": "Bootstrap 5",
          "progress": 95,
          "image": "/bootstrap-5-1.png",
          "_id": "6dfd1532-df82-43d3-b11c-e2020be73c23"
        },
        {
          "_id": "95acd75e-0fc4-405b-b8e8-6d3f663e255f",
          "title": "Font Awesome",
          "progress": 95,
          "image": "/fontawesome-1.png"
        },
        {
          "_id": "8b153430-c038-4af3-b257-f38e0f29da68",
          "title": "Heroku",
          "progress": 80,
          "image": "/heroku-4.png"
        },
        {
          "_id": "ccdd598e-3361-4c99-b96f-4d171980df47",
          "title": "Git",
          "image": "/git-icon.png",
          "progress": 85
        },
        {
          "image": "/github-icon-1.png",
          "_id": "5df84026-1047-48a2-9477-9aebfc9ec8bb",
          "title": "GitHub",
          "progress": 85
        },
        {
          "_id": "c6b45188-3ab9-4d86-8e7a-930e5415c977",
          "title": "VS Code",
          "image": "/vscode.png",
          "progress": 95
        }
      ],
      "_id": "8fc85e21-ef77-4f37-88ec-5dec448462f9",
      "title": "Cloud File Manager",
      "linkToBuild": "https://t.me/SixtynineDirectories",
      "summery": "I created a fully responsive Cloud File Manager interface for @SixtynineDirectories, a Telegram channel dedicated to efficient cloud-to-cloud file transfer, downloads, intelligent search, and streaming. By leveraging Telegram bots, users can easily manage their files with speed and convenience. The project encompasses dynamic file and folder selection capabilities, complemented by customized icons for enhanced file and folder visualization."
    },
  ];

  return (
    <div className='min-h-screen flex flex-col relative text-center md:text-left max-w-full px-10 mb-24 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl 2xl:text-2xl'>projects</h3>
      <div className='relative w-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory snap-always space-x-5 z-20 mb-30 md:mb-20 scrollbar-thin xl:scrollbar-none hover:scrollbar-thin scrollbar-track-[#14121c] scrollbar-thumb-[#7928ca] scrollbar-corner-[#7928ca] scrollbar-thumb-rounded-xl'>
        {projects?.map((project) => (
          <div key={project._id} className='min-w-min max-w-sm sm:max-w-xl md:max-w-4xl xl:max-w-5xl flex flex-col items-center justify-center flex-shrink-0 snap-center p-10 md:p-16 2xl:p-24 '>
            <motion.div
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0, }}
              viewport={{ once: true, }}
              className='mt-20 flex-shrink-0 w-full h-44 md:h-64 xl:h-64'
            >
              <Link
                href={project.linkToBuild}
                target='_blank'
              >
                <Image
                  className='relative object-cover h-full w-auto rounded-lg mx-auto opacity-80 hover:opacity-100 transition-opacity duration-200'
                  src={project.image}
                  width={1200}
                  height={720}
                  quality={75}
                  loading='eager'
                  alt={project.title}
                />
              </Link>
            </motion.div>
            <div className='flex flex-col items-center md:items-start space-y-4 md:space-y-5 2xl:space-y-7 mt-7 px-0 md:px-10 max-w-6xl'>
              <Link
                href={project.linkToBuild}
                target='_blank'
              >
                <h4 className='text-2xl md:text-3xl xl:text-4xl md:mb-0 font-semibold text-center'>
                  {project.title}
                </h4>
              </Link>
              <div className='flex flex-wrap justify-center pt-2 md:-ml-[0.44rem]'>
                {project.technologies?.map((tech) => (
                  <div key={tech._id} className='w-fit mr-3'>
                    <Image
                      className='skill-logo w-10 h-10 xl:w-12 xl:h-12 object-cover rounded-full opacity-80 hover:opacity-100 transition-opacity duration-200'
                      src={tech.image}
                      width={64}
                      height={64}
                      quality={80}
                      loading='eager'
                      alt={tech.title}
                    />
                  </div>
                ))}
              </div>

              <p className='text-base md:text-xl 2xl:text-2xl text-center md:text-left leading-normal md:leading-relaxed 2xl:leading-loose opacity-80 hover:opacity-100 transition-opacity duration-200'>
                {project.summery}
              </p>

            </div>

          </div>
        ))}

      </div>

      <div className='absolute w-full top-[30%] bg-[#7928ca]/10 left-0 h-[300px] xl:h-[400px] 2xl:h-[500px] -skew-y-12' />
    </div>
  )
}