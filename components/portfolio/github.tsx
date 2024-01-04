'use client'
import { ActionIcon } from '@mantine/core'
import { GithubIcon } from '@mantine/ds'
import { Center, Container } from '@mantine/core'
import Link from 'next/link'
import Image from 'next/image'

export function GitHubContibutions() {
  return (
    <Container my="md" className="bg-white p-8 pt-2 rounded-2xl drop-shadow-lg">
      <Center
        sx={(theme) => ({
          height: '2.5rem',
          backgroundImage: theme.fn.gradient(),
          color: theme.white,
        })}
        className="rounded-xl w-1/2 font-bold transform translate-x-1/2 drop-shadow-lg my-5 mb-10"
      >
        GitHub Contribution Calendar
      </Center>
      <div className="relative mx-auto h-32 w-full sp:h-20">
        <Link
          href={'https://github.com/Yuma-Tsukakoshi'}
          target="_blank"
          className="relative mx-auto block h-32 w-full cursor-pointer transition-transform duration-300 hover:scale-105 sp:h-20"
        >
          <Image
            src="https://github-contributions-api.deno.dev/Yuma-Tsukakoshi.svg?no-legend=true&no-total=true&scheme=moon"
            alt="GitHub Contributions"
            fill
            sizes="(max-width: 640px) 800px, 50%"
            priority
            className="h-full w-full object-contain"
          />
        </Link>
      </div>
    </Container>
  )
}
