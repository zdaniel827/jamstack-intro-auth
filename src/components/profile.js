import React from "react";
import { Link } from "gatsby";

const Profile = () => {
  return (
    <div className='dashboard-header'>
      <nav>
        <Link to='/dashboard/secret' activeClassName='active'>
          Secret Stuff
        </Link>
        <Link to='/dashboard/base' activeClassName='active'>
          See your base
        </Link>
      </nav>
      <span>Todo: Show Login Status</span>
    </div>
  );
};

export default Profile;
