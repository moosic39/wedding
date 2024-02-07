'use client'
import { useEffect, useState } from 'react'
import { Container, Title } from './ui-components/atom'
import { Typography } from '@material-tailwind/react'

const Countdown = (): JSX.Element => {
  const launch = new Date(1726930800000).getTime()
  const [countdown, setCountdown] = useState<number>(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown(launch - Date.now())
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [launch])

  const timeLeft = (displayTime: number) => {
    const years = Math.floor(displayTime / (365 * 24 * 60 * 60 * 1000))
    const months = Math.floor(
      (displayTime % (365 * 24 * 60 * 60 * 1000)) /
        (30.5 * 24 * 60 * 60 * 1000),
    )
    const days = Math.floor(
      (displayTime % (30.5 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000),
    )
    const hours = Math.floor(
      (displayTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
    )
    const minutes = Math.floor((displayTime % (60 * 60 * 1000)) / (60 * 1000))
    const seconds = Math.floor((displayTime % (60 * 1000)) / 1000)
    return {
      years: years,
      months: months,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }

  const { ...time } = timeLeft(countdown)
  return (
    <Container id='countdown' title='Le jour du Mariage'>
      <Typography
        className=' font-bold font-clicker text-cyan-600 dark:text-cyan-400 text-3xl md:text-5xl lg:text-7xl'
        placeholder={undefined}
      >
        <div className={'flex justify-center'}>
          <div className={'flex flex-row'}>
            <div className={'p-2'}>{time.months}mois</div>
            <div className={'p-2'}>{time.days}j</div>
          </div>
          <div className={'flex flex-row'}>
            <div className={'p-2'}>{time.hours}h</div>
            <div className={'p-2'}>{time.minutes}min</div>
            <div className={'p-2'}>{time.seconds}sec</div>
          </div>
        </div>
      </Typography>
    </Container>
  )
}

export default Countdown
