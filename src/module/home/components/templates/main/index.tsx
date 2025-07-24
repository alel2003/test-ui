import HomeForm from "@/module/home/components/molecules/form"
import HomeRandom from "@/module/home/components/molecules/random"

export default function HomeMain() {
  return (
    <section className="container mx-auto grid h-full grid-cols-1 p-5 md:grid-cols-2 md:px-5 md:py-[100px]">
      <div className="border-b border-white px-0 py-5 md:border-r md:border-b-0 md:px-8 md:py-0">
        <HomeForm />
      </div>
      <HomeRandom />
    </section>
  )
}
