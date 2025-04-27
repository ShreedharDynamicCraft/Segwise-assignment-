# Segwise Frontend Assignment

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) for Segwise's frontend assignment.

## Project Overview

This application implements:

1. **Filter System**: A pixel-perfect implementation of the Figma design with three types of filters:
   - Dimension Filter: For columns like creative_id, creative_name, country, etc.
   - Tag Filter: For filtering based on tag categories and values
   - Metric Filter: For numeric columns with operators (>, <, =)

2. **Data Table**: A custom-designed table that displays all columns from the mock dataset with:
   - Searching functionality
   - Column sorting
   - Interactive row preview

3. **Interactive Preview**: When clicking on the first cell of any row, a small preview appears in the bottom-right corner, which can be expanded to a full modal.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
