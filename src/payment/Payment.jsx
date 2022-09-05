import { Form, InputGroup, Button } from "react-bootstrap";
import style from "./Payment.module.css";
import icons1 from "../iconPro/Vector.png";

function Payment() {
  return (
    <div className={style.ap}>
      <div className={style.ab}>
        <h1 className="text-light text-center">Premium</h1>
        <p className="fs-5 text-center" style={{ marginLeft: "0" }}>
          Bayar sekarang dan nikmati streaming film-film yang kekinian dari
          <span className="text-danger "> DUMBFLIX</span>
        </p>
        <p className="fs-5 text-center" style={{ marginLeft: "0" }}>
          {" "}
          <span className="text-danger "> DUMBFLIX</span> : 0981312323
        </p>
        <Form action="" className="d-grid gap-4">
          <Form.Group className="mb-0" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="input your account number"
            />
          </Form.Group>
          <InputGroup className="mb-4 ">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              type="file"
            />
            <InputGroup.Text id="basic-addon1">
              <img src={icons1} alt="" />
            </InputGroup.Text>
          </InputGroup>
          <Button variant="danger" size="lg" style={{ marginLeft: "0" }}>
            Kirim
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Payment;
