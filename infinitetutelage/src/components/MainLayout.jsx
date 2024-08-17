import Navbar from './Navbar';
import Sidebar from './Sidebar';
// import Dashboard from './Dashboard';
// import RightSidebar from './RightSidebar';
import '../styles/MainLayout.css'; 

const MainLayout = () => {
  return (
    <div className="container">
      <Sidebar  />
      <div className="main-content">
        <Navbar />
        {/* <div className="content">
          <Dashboard  />
          <RightSidebar />
        </div> */}
      </div>
    </div>
  );
};

export default MainLayout;
