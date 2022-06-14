import React from 'react';
import { Formik } from 'formik';
import Head from 'next/head'
import * as yup from 'yup';
import { useState } from 'react';
import Link from 'next/link';
import { date } from 'yup';

const axios = require('axios');


const Login = () => (
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

                message: '',

                password: '',

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
            onSubmit={(values, { setSubmitting }) => {

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
                console.log(values.email)
                axios.post('https://orderxc.herokuapp.com/Users/Login', {
                    username: values.email,
                    password: values.password

                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
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
                                <h1 className="auth-title">Sign In</h1>
                                <p className="auth-subtitle mb-5">
                                    Provide username and password to countinue.
                                </p>
                                <form onSubmit={validateFormWithJS()} >


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

                                    <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5" type="submit">
                                        Sign In
                                    </button>
                                </form>
                                <div className="text-center mt-5 text-lg fs-4">
                                    <p className="text-gray-600">
                                        Don't have an account?{" "}
                                        <Link href="/register" className="font-bold">
                                            Sign Up
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
);

export default Login;

function validateFormWithJS() {
    const username = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    if (username == null) {
        alert('Please enter your Username.')
        return false
    }

    if (password == null) {
        alert('Password cannot be empty')
        return false
    }
    console.log(username)
    axios.post('https://orderxc.herokuapp.com/Users/Login', {
        username: username,
        password: password

    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }, 400);
}
