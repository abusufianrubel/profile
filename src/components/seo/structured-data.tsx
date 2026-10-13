import { siteConfig } from "@/config/site";
import { education, experiences, projects, techStack } from "@/data/portfolio";
import { absoluteUrl } from "@/lib/utils";

function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function StructuredData() {
  const personId = `${siteConfig.url}/#person`;
  const websiteId = `${siteConfig.url}/#website`;
  const profileId = `${siteConfig.url}/#profile`;
  const skills = techStack.flatMap((category) => category.items);
  const currentRole = experiences[0];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.seo.description,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": profileId,
        url: siteConfig.url,
        name: siteConfig.seo.title,
        description: siteConfig.seo.description,
        inLanguage: "en",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.displayName,
        url: siteConfig.url,
        image: absoluteUrl(siteConfig.url, "/sufian2.png"),
        jobTitle: siteConfig.role,
        description: siteConfig.seo.description,
        email: `mailto:${siteConfig.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "BD",
        },
        sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
        knowsAbout: skills,
        worksFor: {
          "@type": "Organization",
          name: currentRole.company,
        },
        alumniOf: education.map((item) => ({
          "@type": "EducationalOrganization",
          name: item.institution,
        })),
        hasOccupation: {
          "@type": "Occupation",
          name: currentRole.role,
          occupationLocation: {
            "@type": "City",
            name: "Dhaka",
          },
          skills: skills.join(", "),
        },
        subjectOf: projects.map((project) => ({
          "@type": "CreativeWork",
          name: project.name,
          description: project.overview,
          keywords: project.techStack.join(", "),
          url: project.liveDemo === "#" ? `${siteConfig.url}/#projects` : project.liveDemo,
        })),
      },
    ],
  };

  return (
    <script
      id="portfolio-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(graph) }}
    />
  );
}
