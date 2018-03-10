import Portfolio from "../app/components/portfolio";
import DefaultLayout from "../app/components/layout";
import PortfolioSec1 from "../app/components/portfolio/section1";

const routes = [
  {
    path: "/portfolio",
    component: Portfolio,
    layout: DefaultLayout,
    seo: {
      title: "Portfolio",
      description: "See my works below.",
      keywords: "reactjs, javascript",
      site_name: "Portfolio",
      type: "article", // article/product
      type_details: {
        price: {
          currency: "USD",
          amount: "15",
          currency_symbol: "$",
        },
        color: "black",
        section: "Portfolio", // Lifestyle/sports/news
        site_name: "Site name",
        published_time: "2018-03-07T05:59:00+01:00",
        modified_time: "2018-03-07T05:59:00+01:00",
      },
      meta: [
        {
          name: "description",
          content: "Portfolio page with javascript and reactjs projects."
        },
      ],
    },
    routes: [
      {
        path: "/portfolio/:section1?",
        bundleKey: "portfolio",
        exact: true,
        component: PortfolioSec1
      }
    ]
  }
];

export default routes;