import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Error from "../../Components/Error";
import Loader from "../../Components/LoaderComponent/Loader";
import Paginate from "../../Components/HomeComponents/Paginate";
import { toast } from "react-toastify";
import { useCreateProductMutation } from "../../Slices/productsApiSlice";
import productListAction, { deleteProduct } from "../../Actions/productsAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductListScreen = () => {
  const { pageNumber } = useParams();
  const allProducts = useSelector((state) => state.productList);
  const { loading, error, products } = allProducts;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      try {
        dispatch(deleteProduct(id));
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  useCreateProductMutation();
  const createProductHandler = async () => {
    if (window.confirm("Are you sure you want to create a new product?")) {
      navigate("/admin/product/create");
    }
  };
  if (loading) {
    return <Loader />; // Display Loader while loading``
  }

  if (error || !products) {
    return <Error variant="danger" children={error} />; // Display Error component if there is an error or if data is not available
  }

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-end">
          <Button className="my-3" onClick={createProductHandler}>
            <FaPlus /> Create Product
          </Button>
        </Col>
      </Row>

      <>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button variant="light" className="btn-sm mx-2">
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(product._id)}
                  >
                    <FaTrash style={{ color: "white" }} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* <Paginate pages={data.pages} page={data.page} isAdmin={true} /> */}
      </>
    </>
  );
};

export default ProductListScreen;
