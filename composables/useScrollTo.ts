const useScrollToSection = () => {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      console.warn(`Element with ID "${id}" not found.`)
    }
  }

  return { scrollTo }
}

export default useScrollToSection
