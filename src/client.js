//talks to sanity
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "xpjb16mq",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});
