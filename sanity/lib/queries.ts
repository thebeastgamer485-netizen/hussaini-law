import { groq } from 'next-sanity'

export const practiceAreaQuery = groq`
*[_type == "practiceArea" && slug.current == $slug][0]{
  "slug": slug.current,
  metaTitle,
  metaDescription,
  eyebrow,
  title,
  description,
  "heroImage": coalesce(heroImage.asset->url, "/images/hero-subpage.svg"),
  servicesEyebrow,
  servicesTitle,
  servicesIntro,
  services[]{ icon, title, description, large },
  process{
    eyebrow,
    title,
    intro,
    steps[]{ title, description }
  },
  faqs[]->{ question, answer },
  cta{ title, description }
}
`

export const principalQuery = groq`
*[_type == "teamMember" && isPrincipal == true][0]{
  name,
  title,
  bio,
  "imageSrc": coalesce(image.asset->url, "/images/principal.svg"),
  credentials
}
`

export const siteSettingsQuery = groq`
*[_type == "siteSettings"][0]{
  phone, mobile, email, address, hoursWeekday, hoursSaturday,
  social
}
`
