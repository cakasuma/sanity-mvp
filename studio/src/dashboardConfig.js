export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c33afcf5e71b00dd7c3885",
                  title: "Sanity Studio",
                  name: "sanity-mvp-studio",
                  apiId: "7beba527-6fb8-4aa6-bf3a-5dee11550eb6",
                },
                {
                  buildHookId: "60c33afdea32930d4b23d886",
                  title: "Blog Website",
                  name: "sanity-mvp",
                  apiId: "35143b41-f4a1-4061-9f78-13bc5152c556",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/cakasuma/sanity-mvp",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-mvp.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
