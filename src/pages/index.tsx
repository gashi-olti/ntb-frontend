import { HomeComponent } from "@/components/Home";
import Layout from "@/components/Layout";
import { pageMetaProps } from "@/config/pages";

export default function Home() {
  return (
    <Layout meta={pageMetaProps.home}>
      <HomeComponent />
    </Layout>
  );
}

export const getStaticProps = async () => ({
  props: {},
});
