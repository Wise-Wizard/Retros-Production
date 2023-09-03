import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import Loader from "../../Components/LoaderComponent/Loader";
import Error from "../../Components/Error";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList, deleteUser } from "../../Actions/adminAction";

const UserListScreen = () => {
  const dispatch = useDispatch();
  const adminUsersList = useSelector((state) => state.adminGetUsers);
  const { loading, error, usersList } = adminUsersList;
  useEffect(() => {
    console.log("Dispatched");
    dispatch(getUsersList());
  }, [dispatch]);

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      try {
        dispatch(deleteUser(id));
        //refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  if (loading) {
    return <Loader />; // Display Loader while loading
  }

  if (error || !usersList) {
    return <Error variant="danger" children={error} />; // Display Error component if there is an error or if data is not available
  }
  return (
    <>
      <h1>Users</h1>

      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </td>
              <td>
                {user.isAdmin ? (
                  <FaCheck style={{ color: "green" }} />
                ) : (
                  <FaTimes style={{ color: "red" }} />
                )}
              </td>
              <td>
                {!user.isAdmin && (
                  <>
                    <LinkContainer
                      to={`/admin/user/${user._id}/edit`}
                      style={{ marginRight: "10px" }}
                    >
                      <Button variant="light" className="btn-sm" disabled={true}>
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(user._id)}
                    >
                      <FaTrash style={{ color: "white" }} />
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserListScreen;
