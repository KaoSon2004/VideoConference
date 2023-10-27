import Sidebar from "../../components/Sidebar";
import FriendSidebar from "../../components/FriendSidebar";
import Appbar from "../../components/Appbar";
import Messenger from "../../components/Messenger";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "../../store/actions";
import { socketServer } from "../../realtimeCommunication/socketServer";
import Room from "../../components/Room";


const Dashboard = () => {
  const { token } = useSelector((state) => state.auth);
  const { isInRoom } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (token == null) {
      dispatch(actions.logout());
      navigate("/login");
    } else {
      socketServer({ token });
    }
  }, [token]);
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <FriendSidebar />
      <div className="flex flex-col flex-1">
        <Appbar />
        <Messenger />
      </div>

      {isInRoom && <Room />}
    </div>
  );
};
export default Dashboard;
