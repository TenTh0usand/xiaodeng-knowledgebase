export type SidebarGroup = {
  text: string
  items: Array<{ text: string; link: string }>
  collapsed?: boolean
}

export function createAwesomeSidebar(base: string, labels: {
  start: string
  curated: string
  guides: string
  resources: string
  topics: string
}, pages: {
  overview: string
  curated: Array<{ text: string; slug: string }>
  guides: Array<{ text: string; slug: string }>
  resources: Array<{ text: string; slug: string }>
  topics: Array<{ text: string; slug: string }>
}): SidebarGroup[] {
  return [
    {
      text: labels.start,
      items: [{ text: pages.overview, link: `${base}/` }],
    },
    {
      text: labels.curated,
      collapsed: false,
      items: pages.curated.map((item) => ({ text: item.text, link: `${base}/curated/${item.slug}` })),
    },
    {
      text: labels.guides,
      collapsed: false,
      items: pages.guides.map((item) => ({ text: item.text, link: `${base}/guides/${item.slug}` })),
    },
    {
      text: labels.resources,
      collapsed: false,
      items: pages.resources.map((item) => ({ text: item.text, link: `${base}/resources/${item.slug}` })),
    },
    {
      text: labels.topics,
      collapsed: true,
      items: pages.topics.map((item) => ({ text: item.text, link: `${base}/topics/${item.slug}` })),
    },
  ]
}
