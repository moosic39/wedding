'use client'

import {
  Card,
  CardBody,
  Tab,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react'

import EventContentCard from '@/components/event-content-card'

const EVENT_CONTENT = [
  {
    title: "AI's Role in Shaping the Future",
    des: 'Discover how AI is revolutionizing industries, creating new possibilities, and addressing global challenges. Gain a deep understanding of the pivotal role AI plays in driving innovation, sustainability, and progress in our rapidly evolving world.',
    name: 'Marcell Glock',
    position: 'Chief Executive, Spotify',
    panel: 'Panel Discussion',
    img: '/image/avatar1.jpg',
  },
  {
    title: 'Introduction to Machine Learning',
    des: "Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, you'll develop a solid understanding of how Machine Learning powers AI-driven solutions.",
    name: 'Marcell Glock',
    position: 'Chief Executive, Spotify',
    panel: 'Workshop',
    img: '/image/avatar2.jpg',
  },
  {
    title: 'AI in Healthcare: Revolutionizing Patient Care',
    des: 'This session is a must-attend for healthcare professionals, AI enthusiasts, and anyone interested in the intersection of technology and well-being. Join us as we discuss how AI is bringing about positive changes in healthcare.',
    name: 'Marcell Glock',
    position: 'Chief Executive, Spotify',
    panel: 'Workshop',
    img: '/image/avatar3.jpg',
  },
]

export function EventContent() {
  return (
    <section className='py-8 px-8 lg:py-20'>
      <Tabs value='Day1' className='mb-8'>
        <div className='w-full flex mb-8 flex-col items-center'>
          <TabsHeader className='h-12 w-72 md:w-96' placeholder={''}>
            <Tab value='Day1' className='font-medium' placeholder={''}>
              Day 1
            </Tab>
            <Tab value='Day2' className='font-medium' placeholder={''}>
              Day 2
            </Tab>
            <Tab value='Day3' className='font-medium' placeholder={''}>
              Day 3
            </Tab>
          </TabsHeader>
          <TabsBody placeholder={''}>
            <Card className='w-full' placeholder={''}>
              <CardBody placeholder={''}>
                <div className='flex flex-col items-center'>
                  <h3 className='text-2xl font-medium mb-4'>
                    Day 1: 10th June 2021
                  </h3>
                  <p className='text-gray-500 text-center mb-8'>
                    Join us for a day of inspiring talks, informative workshops,
                    and engaging panel discussions.
                  </p>
                </div>
              </CardBody>
            </Card>
          </TabsBody>
        </div>
      </Tabs>
      <div className='mx-auto container'>
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}

export default EventContent
