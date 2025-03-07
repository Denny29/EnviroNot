import image from '../assets/home_bg1.jpg';
import Layout from './Layout.js';

const Home = () => {

    return (
      <div>
        <body style={{backgroundImage: `url(${image})`}}>
          {/* use Layout component for navbar */}
          <Layout></Layout>
          <div class="d-flex align-content-end flex-column ">
              <div style={{height: 50}}></div>
              <div class="d-flex justify-content-center text-center text-white p-2 fs-4">
                Are you tired of fresh air, clean water, and trees? <br></br>
                Does the sight of healthy fish and wildlife make you sick? <br></br>
                Do you long for a world where you can swim in toxic sludge and fill your lungs with smog? <br></br>
                If you said yes to any of these questions, enviroNOT is here to help you achieve your dreams! <br></br> <br></br>
              </div>
              <div class="d-flex justify-content-center text-center text-white p-2 fs-4">
                At enviroNOT we’ve compiled every tool available to DESTROY the environment in one convenient place! <br></br>
                Want to create more smog? Want to dump some toxic waste? Want to clear cut an entire forest? <br></br>
              </div>
              <div class="d-flex justify-content-center text-center text-white p-2 fs-1">
                <b>We’ve got you covered!</b> 
              </div>      
          </div>
        </body>
      </div>
      
  );
  };
  
  export default Home;
