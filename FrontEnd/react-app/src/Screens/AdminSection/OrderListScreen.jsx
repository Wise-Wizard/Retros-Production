import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Loader from "../../Components/LoaderComponent/Loader";
import Error from "../../Components/Error";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersList } from "../../Actions/adminAction";
import { useEffect } from "react";

const OrderListScreen = () => {
  const dispatch = useDispatch();
  const adminOrdersList = useSelector((state) => state.adminGetOrders);
  const { loading, error, ordersList } = adminOrdersList;
  useEffect(() => {
    console.log("Dispatched");
    dispatch(getOrdersList());
  }, [dispatch]);
  // const { data: orders, isLoading, error } = useGetOrdersQuery();
  if (loading) {
    return <Loader />; // Display Loader while loading
  }

  if (error || !ordersList) {
    return <Error variant="danger" children={error} />; // Display Error component if there is an error or if data is not available
  }
  return (
    <>
      <h1>Orders</h1>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>USER</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ordersList.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.User && order.User.name}</td>
              <td>{order.createdAt.substring(0, 10)}</td>
              <td>${order.totalPrice}</td>
              <td>
                {order.isPaid ? (
                  order.paidAt.substring(0, 10)
                ) : (
                  <FaTimes style={{ color: "red" }} />
                )}
              </td>
              <td>
                {order.isDelivered ? (
                  order.deliveredAt.substring(0, 10)
                ) : (
                  <FaTimes style={{ color: "red" }} />
                )}
              </td>
              <td>
                <LinkContainer to={`/order/${order._id}`}>
                  <Button variant="light" className="btn-sm">
                    Details
                  </Button>
                </LinkContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default OrderListScreen;
