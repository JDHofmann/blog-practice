const Index = ({ title, description, ...props }) => {
  return (
    <div>
      <h1>Index</h1>
    </div>
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