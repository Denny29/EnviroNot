import Layout from './Layout.js';
import Table from './Table.js'
import bg from '../assets/leaderboard_bg.jpg';

const Leaderboard = () => {
    return (
      <div>
        <body style={{backgroundImage: `url(${bg})`}}>
            <Layout></Layout>
            <Table></Table>
        </body>
      </div>
    )
}

export default Leaderboard;