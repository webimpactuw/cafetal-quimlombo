import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "4l01l3jp",
    dataset: "production",
});

export default client;