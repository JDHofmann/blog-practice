import Layout from "../components/Layout"

const Index = ({ title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <h1>Index</h1>
      <p>{description}</p>
      <main>
        Posts will go here
      </main>
    </Layout>
  )
}
export default Index 

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description
    }
  }
}