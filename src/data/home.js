import LiveStatistics from '~/assets/live_statistics.webp';
import newsBulletin from '~/assets/news_bulletin.jpg';
import trackConnections from '~/assets/tract_connections.jpg';
import testCenter from '~/assets/test_center.jpg';


export default [
  {
    type: "menu_card",
    items: [
      {
        title: "Profile & Setting Management",
        source: LiveStatistics,
        category_id: 1
      },
      {
        title: "Budget Management",
        source: newsBulletin,
        category_id: 2
      },
      {
        title: "RFQ Management",
        source: trackConnections,
        category_id: 3
      },
      {
        title: "PO / Invoice Management",
        source: testCenter,
        category_id: 4
      },
    ]
  },
];