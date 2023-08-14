import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">Smith`s Takeaway</Text>
        <Text className="text-zinc-600">
          This service has been created as a final project forIntelligent Agents and Process Automation (H9IAPI) course to automize Smith`s Takeaway Restaurants order management system.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">AI-powered Digital Assistant: Makes it easy for you</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
