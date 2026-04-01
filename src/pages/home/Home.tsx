import CategoriesSection from "@/components/home/CategoriesSection"
import Hero from "@/components/home/Hero"
import LatestViewedSection from "@/components/home/LatestViewedSection"
import RandomMealSection from "@/components/home/RandomMealSection"

export default function Home() {
  return (
    <>
      <Hero />
      <RandomMealSection />
      <LatestViewedSection />
      <CategoriesSection />
    </>
  )
}
