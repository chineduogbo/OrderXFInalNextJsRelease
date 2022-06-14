import React from 'react';
import { Formik } from 'formik';
import Head from 'next/head'

import * as yup from 'yup';
import { useState } from 'react';
import Link from 'next/link';
import { date } from 'yup';
const axios = require('axios');
import { useRouter } from 'next/router';


const Register = () => {
    const router = useRouter();
    return (
        <>

            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Order-X</title>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="assets/css/bootstrap.css" />
                <link rel="stylesheet" href="assets/vendors/bootstrap-icons/bootstrap-icons.css" />
                <link rel="stylesheet" href="assets/css/app.css" />
                <link rel="stylesheet" href="assets/css/pages/auth.css" />
            </Head>
            <Formik
                initialValues={{
                    email: '',
                    fullname: '',
                    message: '',
                    phonenumber: '',
                    password: '',
                    confirmpassword: ''
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {

                    // axios.post('http://localhost:3000/api/users', {
                    //     username: values.email,
                    //     password: values.password,
                    //     FullName: values.name,
                    //     PhoneNumber: values.phonenumber,
                    //     active: true,
                    //     lastlogin: Date.now

                    // }).then(function (response) {
                    //     console.log(response);
                    // })
                    const body = {
                        username: values.email,
                        password: values.password,
                        fullName: values.name,
                        phoneNumber: values.phonenumber,
                        active: true,
                        lastlogin: Date.now,
                        drinklimit: 0, _id: "", favouriteBrands: []


                    };
                    const response = await fetch('https://orderxc.herokuapp.com/Users/CreateUser', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body),
                    });
                    //console.log(response);
                    const data = await response.json();
                    console.log(data);
                    if (data.success) {
                        //  localStorage.setItem("UserDetails", JSON.stringify(data));
                        router.push('/home');
                    }

                    // axios.post('http://localhost:3000/api/users', {
                    //     username: values.email,
                    //     password: values.password,
                    //     FullName: values.name,
                    //     PhoneNumber: values.phonenumber,
                    //     active: true,
                    //     lastlogin: Date.now

                    // })
                    //     .then(function (response) {
                    //         console.log(response);
                    //     })
                    //     .catch(function (error) {
                    //         console.log(error);
                    //     });
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    // }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    // <form onSubmit={handleSubmit}>
                    //     <input
                    //         type="email"
                    //         name="email"
                    //         onChange={handleChange}
                    //         onBlur={handleBlur}
                    //         value={values.email}
                    //     />
                    //     {errors.email && touched.email && errors.email}
                    //     <input
                    //         type="password"
                    //         name="password"
                    //         onChange={handleChange}
                    //         onBlur={handleBlur}
                    //         value={values.password}
                    //     />
                    //     {errors.password && touched.password && errors.password}
                    //     <button type="submit" disabled={isSubmitting}>
                    //         Submit
                    //     </button>
                    // </form>


                    <div id="auth">
                        <div className="row h-100">
                            <div className="col-lg-5 col-12">
                                <div id="auth-left">
                                    <div className="auth-logo">
                                        <a href="index.html">
                                            <img src="ORDER X LOGO-02.png" alt="Logo" height={500} />
                                        </a>
                                    </div>
                                    <h1 className="auth-title">Sign Up</h1>
                                    <p className="auth-subtitle mb-5">
                                        Input your data to register to our website.
                                    </p>
                                    <form onSubmit={handleSubmit}>

                                        <div className="form-group position-relative has-icon-left mb-4">
                                            <input
                                                type="text"
                                                className="form-control form-control-xl"
                                                placeholder="Full Name"
                                                value={values.fullname}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name="fullname"
                                                id="fullname"
                                            />
                                            <div className="form-control-icon">
                                                <i className="bi bi-person" />
                                            </div>
                                        </div>
                                        <div className="form-group position-relative has-icon-left mb-4">
                                            <input
                                                type="text"
                                                className="form-control form-control-xl"
                                                placeholder="Username"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name="email"
                                                id="email"
                                            />
                                            <div className="form-control-icon">
                                                <i className="bi bi-envelope" />
                                            </div>
                                        </div>
                                        <div className="form-group position-relative has-icon-left mb-4">
                                            <input
                                                type="tel"
                                                className="form-control form-control-xl"
                                                placeholder="Phone Number"
                                                value={values.phonenumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name="phonenumber"
                                                id="phonenumber"
                                            />
                                            <div className="form-control-icon">
                                                <i className="bi bi-phone" />
                                            </div>
                                        </div>
                                        <div className="form-group position-relative has-icon-left mb-4">
                                            <input
                                                type="password"
                                                className="form-control form-control-xl"
                                                placeholder="Password"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name="password"
                                                id="password"
                                            />
                                            <div className="form-control-icon">
                                                <i className="bi bi-shield-lock" />
                                            </div>
                                        </div>
                                        <div className="form-group position-relative has-icon-left mb-4">
                                            <input
                                                type="password"
                                                className="form-control form-control-xl"
                                                placeholder="Confirm Password"
                                                value={values.confirmpassword}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name="confirmpassword"
                                                id="confirmpassword"
                                            />
                                            <div className="form-control-icon">
                                                <i className="bi bi-shield-lock" />
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5" type="submit">
                                            Sign Up
                                        </button>
                                    </form>
                                    <div className="text-center mt-5 text-lg fs-4">
                                        <p className="text-gray-600">
                                            Already have an account?{" "}
                                            <Link href="/login" className="font-bold">
                                                Log in
                                            </Link>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 d-none d-lg-block">
                                <div id="auth-right" style={{
                                    backgroundImage: 'url("/pexels-marcelo-chagas-3324438.jpg")',
                                    backgroundPosition: "center" /* center the image */,
                                    backgroundRepeat: "no-repeat" /* do not repeat the image */,
                                    backgroundSize: "cover"
                                }}>

                                </div>
                            </div>
                        </div>
                    </div>

                )}
            </Formik>

        </>
    )
};

export default Register;