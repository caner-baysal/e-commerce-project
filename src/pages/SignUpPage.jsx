import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Label, Spinner } from 'reactstrap';
import { fetchRoles } from '../actions/clientActions';

const axiosInstance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com"
});

function SignUpPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const roles = useSelector((state) => state.client.roles);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        control,
        setValue,
        trigger,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            validatePassword: "",
            role_id: "",
            store: {
                name: "",
                phone: "",
                tax_no: "",
                bank_account: "",
            }
        },
        mode: "onChange",
    });

    const passwordValue = watch("password");

    useEffect(() => {
        dispatch(fetchRoles());
    }, [dispatch]);

    useEffect(() =>{
        if(roles.length > 0) {
            setValue("role_id", roles[0].code, {shouldValidate: true})
        }
    }, [roles, setValue]);

    useEffect(() => {
        trigger("validatePassword");
    }, [passwordValue, trigger]);

    const selectedRoleId = watch("role_id");
    const isStore = selectedRoleId === "store";

    console.log("errors:", errors);
    console.log("isValid:", isValid);

    const submitFn = async (formData) => {
        setIsSubmitting(true);
        setSubmitError(null);
        try {
            const payload = formData.role_id === "store"
                ? {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    role_id: formData.role_id,
                    store: {
                        name: formData.store.name,
                        phone: formData.store.phone,
                        tax_no: formData.store.tax_no,
                        bank_account: formData.store.bank_account,
                    }
                }
                : {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    role_id: formData.role_id,
                };

            await axiosInstance.post("/signup", payload);
            reset();
            alert("You need to click link in email to activate your account!");
            history.goBack();
        } catch (error) {
            console.warn("POST error:", error);
            setSubmitError(error.response?.data?.message || "Sign up failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit(submitFn)} className="w-[400px] [@media(min-width:1024px)]:w-[1024px]">

            <FormGroup row>
                <Label for="name" sm={2}>Name</Label>
                <Col sm={10}>
                    <input
                        id="name"
                        className="form-control"
                        {...register("name", {
                            required: "Name is required",
                            minLength: { value: 3, message: "Name must be at least 3 characters" }
                        })}
                        placeholder="Type your name"
                        type="text"
                    />
                    {errors.name && <p className="text-danger mt-1">{errors.name.message}</p>}
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                <Col sm={10}>
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
                        placeholder="Type your email"
                        type="email"
                    />
                    {errors.email && <p className="text-danger mt-1">{errors.email.message}</p>}
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="password" sm={2}>Password</Label>
                <Col sm={10}>
                    <input
                        id="password"
                        className="form-control"
                        {...register("password", {
                            required: "Password is required",
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                message: "Min 8 characters with uppercase, lowercase, number and special character"
                            }
                        })}
                        placeholder="Type your password"
                        type="password"
                    />
                    {errors.password && <p className="text-danger mt-1">{errors.password.message}</p>}
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="validatePassword" sm={2}>Confirm Password</Label>
                <Col sm={10}>
                    <input
                        id="validatePassword"
                        className="form-control"
                        {...register("validatePassword", {
                            required: "Please re-type your password",
                            validate: (value) =>
                                value === passwordValue || "Passwords must match"
                        })}
                        placeholder="Re-type your password"
                        type="password"
                    />
                    {errors.validatePassword && <p className="text-danger mt-1">{errors.validatePassword.message}</p>}
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="role_id" sm={2}>Role</Label>
                <Col sm={10}>
                    <Controller
                        name="role_id"
                        control={control}
                        rules={{ required: "Please select a role" }}
                        render={({ field }) => (
                            <select
                                id="role_id"
                                className="form-select"
                                {...field}
                            >
                                {roles.map((role) => (
                                    <option key={role.id} value={role.code}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                        )}
                    />
                    {errors.role_id && <p className="text-danger mt-1">{errors.role_id.message}</p>}
                </Col>
            </FormGroup>

            {isStore && (
                <>
                    <FormGroup row>
                        <Label for="store_name" sm={2}>Store Name</Label>
                        <Col sm={10}>
                            <input
                                id="store_name"
                                className="form-control"
                                {...register("store.name", {
                                    required: "Store name is required",
                                    minLength: { value: 3, message: "Store name must be at least 3 characters" }
                                })}
                                placeholder="Type store name"
                                type="text"
                            />
                            {errors?.store?.name && <p className="text-danger mt-1">{errors.store.name.message}</p>}
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="phone" sm={2}>Phone</Label>
                        <Col sm={10}>
                            <input
                                id="phone"
                                className="form-control"
                                {...register("store.phone", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^(5\d{9})$/,
                                        message: "Enter a valid Turkish phone number without leading 0 (e.g. 5xxxxxxxxx)"
                                    }
                                })}
                                placeholder="5xxxxxxxxx"
                                type="text"
                            />
                            {errors?.store?.phone && <p className="text-danger mt-1">{errors.store.phone.message}</p>}
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="tax_no" sm={2}>Tax ID</Label>
                        <Col sm={10}>
                            <input
                                id="tax_no"
                                className="form-control"
                                {...register("store.tax_no", {
                                    required: "Tax ID is required",
                                    pattern: {
                                        value: /^T\d{4}V\d{6}$/,
                                        message: "Tax ID must match format: TXXXXVXXXXXX"
                                    }
                                })}
                                placeholder="TXXXXVXXXXXX"
                                type="text"
                            />
                            {errors?.store?.tax_no && <p className="text-danger mt-1">{errors.store.tax_no.message}</p>}
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="bank_account" sm={2}>Bank Account (IBAN)</Label>
                        <Col sm={10}>
                            <input
                                id="bank_account"
                                className="form-control"
                                {...register("store.bank_account", {
                                    required: "IBAN is required",
                                    pattern: {
                                        value: /^TR\d{24}$/,
                                        message: "Enter a valid Turkish IBAN (TR + 24 digits)"
                                    }
                                })}
                                placeholder="TR000000000000000000000000"
                                type="text"
                            />
                            {errors?.store?.bank_account && <p className="text-danger mt-1">{errors.store.bank_account.message}</p>}
                        </Col>
                    </FormGroup>
                </>
            )}

            {submitError && (
                <FormGroup row>
                    <Col sm={{ offset: 2, size: 10 }}>
                        <p className="text-danger">{submitError}</p>
                    </Col>
                </FormGroup>
            )}

            <FormGroup row>
                <Col sm={{ offset: 2, size: 10 }}>
                    <Button type="submit" disabled={!isValid || isSubmitting} color="primary">
                        {isSubmitting
                            ? <><Spinner size="sm" className="me-2" />Submitting...</>
                            : "Submit"
                        }
                    </Button>
                </Col>
            </FormGroup>

        </Form>
    );
}

export default SignUpPage;