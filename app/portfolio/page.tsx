import { UserInfoIcons } from '@/components/portfolio/UserHeadLine'
// import { GridSkillsSection } from '@/components/portfolio/UserSkills'
import { GridIntroduceSection } from '@/components/portfolio/UserIntroduce'
import { ArticleCard } from '@/components/portfolio/ArticleCard'
import { GitHubContibutions } from '@/components/portfolio/github'

export default function Home() {
  return (
    <main className="">
      {/* 自分のアイコン画像入れる */}
      <UserInfoIcons />
      <GitHubContibutions />
      {/* <GridSkillsSection /> */}
      <GridIntroduceSection />
    </main>
  )
}
