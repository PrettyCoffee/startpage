export type Section = {
  posY: number
  type: string
  label: string
}

const getAllHeadings = () => {
  const headings: HTMLHeadingElement[] = []
  const h1 = document.querySelectorAll("h1")
  const h2 = document.querySelectorAll("h2")
  const h3 = document.querySelectorAll("h3")
  h1.forEach(heading => headings.push(heading))
  h2.forEach(heading => headings.push(heading))
  h3.forEach(heading => headings.push(heading))
  return headings
}

const gatherHeadingInfo = (heading: HTMLHeadingElement): Section => ({
  label: heading.innerText,
  posY: heading.offsetTop,
  type: heading.nodeName,
})

export const getSections = () =>
  getAllHeadings()
    .map(heading => gatherHeadingInfo(heading))
    .sort((a, b) => a.posY - b.posY)
