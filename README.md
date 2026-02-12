## Leonardo Gaarcia Persoanl website 

For simplicity, the website is hosted at: https://leo-garcia.vercel.app/ 

All the source code is under the "app" folder

## Project Structure
```
App
  -componets/                        # Has the components used in the main page
      -GeneralInfoCard.tsx           # components of the infor with picture, name, linked, github, and general information
      -NavBar.tsx                    # Navegation bar 
      -dropdown.tsx                  # Drop-down menu used for the projects
  -facultySync/
      -page.tsx                      # Source for the faculty Sync project page                     
  -keyshade/
      -page.tsx                      # Source for the Keyshade contribution page         
  -transcript/
      -components/
          -SemesterGrades.tsx        # component used to display grades 
      -page.tsx                      # Source for the transcript page
  -globals.css                       # Source code for styles applied to the whole website
  -layout.tsx                        # Defines the structure across all pages
  -page.tsx                          # Source code for the main/home page

```

## Project Structure

```
App
├── components/
│   ├── GeneralInfoCard.tsx     # Has the components used in the main page
│   ├── NavBar.tsx              # Navigation bar
│   └── dropdown.tsx            # Drop-down menu used for the projects
│
├── facultySync/
│   └── page.tsx                # Source for the Faculty Sync project page
│
├── keyshade/
│   └── page.tsx                # Source for the Keyshade contribution page
│
├── transcript/
│   ├── components/
│   │   └── SemesterGrades.tsx  # Component used to display grades
│   └── page.tsx                # Source for the transcript page
│
├── globals.css                 # Source code for styles applied to the whole website
├── layout.tsx                  # Defines the structure across all pages
└── page.tsx                    # Source code for the main/home page
```









-----------------------------------------------------------------------
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
