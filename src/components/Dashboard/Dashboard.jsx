import { useContext } from 'react';
import { AuthedUserContext } from '../../App';

const Dashboard = () => {
  const user = useContext(AuthedUserContext);

  return (
    <div>
      <h1>Welcome to your Dashboard, {user.username}!</h1>
      {/* Add more dashboard content here */}
    </div>
  );
};

export default Dashboard;
