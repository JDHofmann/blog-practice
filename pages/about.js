import Layout from '../components/Layout'

export default function About({ title, description, ...props }) {
    return (
        <>
            <Layout>
                <h1>Welcome to the About Page</h1>
                <p>{description}</p>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const configData = await import(`../siteconfig.json`)

    return {
        props: {
            title: configData.default.title,
            description: configData.default.description
        }
    }
}