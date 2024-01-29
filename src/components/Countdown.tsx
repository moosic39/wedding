'use client'
import { useEffect, useState } from 'react'
import { TimeLeft } from './CopyCountdown'
import { Container, Title } from './ui-components/atom'
import { Typography } from '@material-tailwind/react'

function Countdown(): JSX.Element {
  const launch = new Date(1726930800000).getTime()
  const currentTime = new Date().getTime()
  const [countdown, setCountdown] = useState<number>()

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown(launch - currentTime)
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [countdown, currentTime, launch])

  return (
    <div className={''}>
      <ShowCountdown
        countdown={typeof countdown !== 'undefined' ? countdown : 0}
      />
    </div>
  )
}
function ShowCountdown({
  countdown,
}: Readonly<{ countdown: number }>): JSX.Element {
  const timeLeft: TimeLeft = (displayTime) => {
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
    <Container id='countdown'>
      <Title title='Le jour du Mariage' />
      <Typography
        className=' font-extrabold text-cyan-600 text-3xl md:text-5xl lg:text-7xl'
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
