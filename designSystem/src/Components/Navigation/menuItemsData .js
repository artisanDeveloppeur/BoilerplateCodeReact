export const menuItemsData = [

  {
    title: "Services",
    url: "/services",
    submenu: [
      {
        title: "Web Design",
        url: "/services/web-design",
      },
      {
        title: "Web Development",
        url: "/services/web-dev",
        submenu: [
          {
            title: "Frontend",
            url: "/services/web-dev/frontend",
          },
          {
            title: "Backend",
            path: "/services/web-dev/Backend",
            submenu: [
              {
                title: "NodeJS",
                url: "/services/web-dev/Backend/node",
              },
              {
                title: "PHP",
                url: "/services/web-dev/Backend/php",
              },
            ],
          },
        ],
      },
    ],
  },

];