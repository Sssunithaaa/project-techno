import "./topbox.css";
import { topDealUsers } from "../../data";

const Topbox = () => {
  return (
    <div className="topBox">
      <h1>Top Most Employees</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">{user.amount}</span>
          </div>
        ))}
      </div>
      <h2>PErformance</h2>
    </div>
  );
};

export default Topbox;
