import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export function fetchPageInfo() {
  const pageInfo = client.fetch(groq`
  *[_type == 'pageInfo'][0]
  `);
  return pageInfo;
}

export function fetchSocials() {
  const socials = client.fetch(groq`
  *[_type == 'socials']
  `);
  return socials;
}

export function fetchProjects() {
  const projects = client.fetch(groq`
    *[_type == 'projects'] {
      ...,
      technologies[]->
    }
  `);
  return projects;
}

export function fetchSkills() {
  const skills = client.fetch(groq`
    *[_type == 'skills']
  `);
  return skills;
}

export function fetchExperiences() {
  const exps = client.fetch(groq`
    *[_type == 'experiences'] {
      ...,
      technologies[]->
    }
  `);
  return exps;
}