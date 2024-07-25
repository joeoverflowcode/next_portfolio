
   <h4 align="center">
     This Portfolio was built off the base code of the following <a href="https://github.com/adrianhajdin/portfolio" target="_blank"><b>repositroy</b></a>. Credit and Recognition to JavaScript Mastery and their excellent tutorial. 
    </h4>
    <p>
A Big Thank You to all involved giving me feedback and helping me along the way. <a href="https://github.com/surrenity">Surren</a> for the help getting my deployment variables set up.<br/>
</p>


### Next JS Portfolio - [view live](https://joeoverflowcode.github.io/next_portfolio/)





<div align="center">
<br/><br/>
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Github_Pages-black?style=for-the-badge&logoColor=white&logo=github&color=000000" alt="three.js" />
  </div>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🛠️ [About](#about)
2. 🚀  [Deployment](#deployment)
3. 🤸 [Quick Start](#start)



## <a name="about">🛠️ About</a>

Built with Next.js for handling the user interface, Aceternity UI components and styled with TailwindCSS, this portfolio demonstrates a range of modern front-end design.


## <a name="deploymnet"> Deployment</a>
I found a solution to get this project deployed to Github Pages following [gregrickaby's github page](https://github.com/gregrickaby/nextjs-github-pages)


## <a name="start">🤸 Get Started</a>

This is a live [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

---

## Configuration for Next.js and Github Pages

### Next.js Config

I needed to configure Next.js to [deploy static exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports). This is required for GitHub Pages to work.

1. Open the `next.config.mjs` file
2. I added the following:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/next_portfolio",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Please read more about the steps required for successful deployment at [gregrickaby's github page](https://github.com/gregrickaby/nextjs-github-pages).


