import GuideCard from "@/components/guide/guide-card"
import { Button } from "@/components/ui/button"
import { BsPhone, BsLightningCharge } from "react-icons/bs"
import { FaHeadphones } from "react-icons/fa"
import { IoGameControllerOutline } from "react-icons/io5"
import { RiToolsFill } from "react-icons/ri"

const guideData = [
  {
    Icon: IoGameControllerOutline,
    text: "how to choose the right gaming laptop for your needs",
    href: "#",
  },
  {
    Icon: BsPhone,
    text: "the best accessories to enhance your smartphone experience",
    href: "#",
  },
  {
    Icon: FaHeadphones,
    text: "the benefits of nosie-Cancelling headphones",
    href: "#",
  },
  {
    Icon: RiToolsFill,
    text: "10 tips for maintaining your electronics and extending their lifespan",
    href: "#",
  },
  {
    Icon: BsLightningCharge,
    text: `the future of wearable technology: what's coming next?`,
    href: "#",
  },
  {
    Icon: BsPhone,
    text: "5G phones: how will the latest network technology affect your experience?",
    href: "#",
  },
]

const GuideSession = () => {
  return (
    <section className='p-5'>
      <div className='container pb-8 xl:pb-24'>
        <div className='mb-6 flex items-center justify-between xl:mb-12'>
          <div>
            <span className='mb-3 text-xs'>HOW TO</span>
            <h2 className='text-2xl font-bold leading-tight tracking-tight'>Guides for Everything You Need</h2>
          </div>
          <div className='hidden md:inline-block'>
            <Button variant={"outline"} className='underline'>
              View All Guides
            </Button>
          </div>
        </div>
        <div>
          <ul className='grid grid-cols-12 gap-2'>
            {guideData.map((listItem) => (
              <li key={listItem.text} className='col-span-12 aspect-square md:col-span-4 xl:col-span-2 xl:aspect-auto'>
                <GuideCard {...listItem} />
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-3 block md:hidden'>
          <Button className='w-full'>View All Guides</Button>
        </div>
      </div>
    </section>
  )
}

export default GuideSession
