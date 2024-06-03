/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *

   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *

   */
  basePath: "/next_portfolio",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *

   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;


// /**
//    * @type {import('next').NextConfig}
//    */
// const nextConfig   = {
//   images: {
//     loader: 'akamai',
//     path: '',
//   },
//   assetPrefix: './',
// };

// export default   nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     basePath: "/next_ghpages",
//     output: "export",  // <=== enables static exports
//     reactStrictMode: true,
//   };
  
//   module.exports = nextConfig;

// const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = ''
// let basePath = '/'

// if (isGithubActions) {
//     // trim off `<owner>/`
//     const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  
//     const assetPrefix = `/next_ghpages/`
//     const basePath = `/next_ghpages`
//   }

// const repo = 'https://joeoverflowcode.github.io/'
// // const assetPrefix = `/next_ghpages/`
// // const basePath = `/next_ghpages`

// module.exports = {
//   assetPrefix: assetPrefix,
//   basePath: basePath,
// }