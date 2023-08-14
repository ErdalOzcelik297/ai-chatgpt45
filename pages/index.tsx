import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">Smith`s Takeaway</Text>
        <Text className="text-zinc-600">
          This service has been developed as a final project for the Intelligent Agents and Process Automation (H9IAPI) course to automate the order management system for Smiths Takeaway Restaurant.
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
