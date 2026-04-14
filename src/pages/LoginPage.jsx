import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../actions/clientActions";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { Button, Col, Form, FormGroup, Label, Spinner } from 'reactstrap';

function LoginPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm({
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        }, mode: "onChange"
    });


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            history.push("/");
        }
    }, [history]);

    const submitFn = async (formData) => {
        try {
            await dispatch(loginUser(
                { email: formData.email, password: formData.password },
                formData.rememberMe,
                history.push("/shop")
            ));
        } catch (error) {
            toast.error(error.response?.data?.meesage || "Login failed",
                { position: "top-right", autoClose: 3000 }
            );
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
            <div style={{ width: "100%", maxWidth: "400px" }}>
                <h2 className="mb-4 text-center">Login</h2>

                <ToastContainer />

                <Form onSubmit={handleSubmit(submitFn)}>

                    <FormGroup row>
                        <Label for="email" sm={3}>Email</Label>
                        <Col sm={9}>
                            <input
                                id="email"
                                className="form-control"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Enter a valid email address"
                                    }
                                })}
                                placeholder="Enter your email"
                                type="email"
                            />
                            {errors.email && <p className="text-danger mt-1">{errors.email.message}</p>}
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="password" sm={3}>Password</Label>
                        <Col sm={9}>
                            <input
                                id="password"
                                className="form-control"
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                placeholder="Enter your password"
                                type="password"
                            />
                            {errors.password && <p className="text-danger mt-1">{errors.password.message}</p>}
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={{ offset: 3, size: 9 }}>
                            <div className="d-flex align-items-center gap-2">
                                <input
                                    id="rememberMe"
                                    type="checkbox"
                                    className="form-check-input"
                                    {...register("rememberMe")}
                                />
                                <Label for="rememberMe" className="mb-0">Remember me</Label>
                            </div>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={{ offset: 3, size: 9 }}>
                            <Button
                                type="submit"
                                color="primary"
                                disabled={!isValid || isSubmitting}
                                className="w-100"
                            >
                                {isSubmitting
                                    ? <><Spinner size="sm" className="me-2" />Logging in...</>
                                    : "Login"
                                }
                            </Button>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={{ offset: 3, size: 9 }}>
                            <p className="mt-2 text-center">
                                Don't have an account?{" "}
                                <a href="/signup">Sign up</a>
                            </p>
                        </Col>
                    </FormGroup>

                </Form>
            </div>
        </div>
    )
}

export default LoginPage;