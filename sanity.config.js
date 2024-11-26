import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: "8lr1d42l",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,             // Use the Content Delivery Network (faster for published content)
});

// Helper function to generate image URLs
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
