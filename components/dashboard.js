import React from 'react'
import Script from 'next/script';
import Head from 'next/head'
import Link from 'next/link'
import Menuitem from './menuitem';


const dashboard = (props) => {
    return (
        <>


            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Order X</title>

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="assets/css/bootstrap.css" />

                <link rel="stylesheet" href="assets/vendors/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="assets/vendors/bootstrap-icons/bootstrap-icons.css" />
                <link rel="stylesheet" href="assets/css/app.css" />
                <link rel="shortcut icon" href="assets/images/favicon.svg" type="image/x-icon" />



                <link rel="stylesheet" href="assets/vendors/iconly/bold.css" />


                <link rel="stylesheet" href="assets/vendors/jquery-datatables/jquery.dataTables.bootstrap5.min.css" />
                <link rel="stylesheet" href="assets/vendors/fontawesome/all.min.css" />



            </Head>
            <div id="app">
                <div id="sidebar" className="active">
                    <div className="sidebar-wrapper active">
                        <div className="sidebar-header">
                            <div className="d-flex justify-content-between">
                                <div className="logo">
                                    <a href="index.html">

                                        <img src="ORDER X LOGO-02.png" alt="Order X" srcSet="" />
                                    </a>
                                </div>
                                <div className="toggler">
                                    <a href="#" className="sidebar-hide d-xl-none d-block">
                                        <i className="bi bi-x bi-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-menu">
                            <ul className="menu">
                                <li className="sidebar-title">Menu</li>
                                <li className="sidebar-item  ">
                                    <a href="/home" className="sidebar-link">
                                        <i className="bi bi-grid-fill" />
                                        <span>Dashboard</span>

                                    </a>
                                </li>



                                <li className="sidebar-item  ">
                                    <div className="sidebar-link">
                                        <i className=" bi bi-calendar2-event" />    <Link href="/events" >
                                            <span> Event</span>
                                            {/* <Menuitem title="Events" icon="bi bi-file-earmark-medical-fill" /> */}
                                        </Link>
                                        {/* <a className="sidebar-link">
                                    </a> */}
                                    </div>
                                </li>

                                <li className="sidebar-item  ">
                                    <div className="sidebar-link">
                                        <i className=" bi bi-table  ml-6" />    <Link href="/tables" >
                                            <span> Tables</span>
                                            {/* <Menuitem title="Events" icon="bi bi-file-earmark-medical-fill" /> */}
                                        </Link>
                                        {/* <a className="sidebar-link">
                                    </a> */}
                                    </div>
                                </li>


                                <li className="sidebar-item  ">
                                    <div className="sidebar-link">
                                        <i className="bi bi-receipt  ml-6" />    <Link href="/stock" >
                                            <span> Stock</span>
                                            {/* <Menuitem title="Events" icon="bi bi-file-earmark-medical-fill" /> */}
                                        </Link>
                                        {/* <a className="sidebar-link">
                                    </a> */}
                                    </div>
                                </li>
                                <li className="sidebar-item  ">
                                    <div className="sidebar-link">
                                        <i className="bi bi-people  ml-6" />    <Link href="/waiters" >
                                            <span> Waiters</span>
                                            {/* <Menuitem title="Events" icon="bi bi-file-earmark-medical-fill" /> */}
                                        </Link>
                                        {/* <a className="sidebar-link">
                                    </a> */}
                                    </div>
                                </li>
                                <li className="sidebar-item  ">
                                    <div className="sidebar-link">
                                        <i className="bi bi-list-task  ml-6" />    <Link href="/orders" >
                                            <span> Orders</span>
                                            {/* <Menuitem title="Events" icon="bi bi-file-earmark-medical-fill" /> */}
                                        </Link>
                                        {/* <a className="sidebar-link">
                                    </a> */}
                                    </div>
                                </li>


                            </ul>
                        </div>
                        <button className="sidebar-toggler btn x">
                            <i data-feather="x" />
                        </button>
                    </div>
                </div>
                <div id="main" className="layout-navbar">
                    <header className="mb-3">
                        <nav className="navbar navbar-expand navbar-light ">
                            <div className="container-fluid">
                                <a href="#" className="burger-btn d-block">
                                    <i className="bi bi-justify fs-3" />
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item dropdown me-1">
                                            <a
                                                className="nav-link active dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="bi bi-envelope bi-sub fs-4 text-gray-600" />
                                            </a>
                                            <ul
                                                className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="dropdownMenuButton"
                                            >
                                                <li>
                                                    <h6 className="dropdown-header">Mail</h6>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        No new mail
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown me-3">
                                            <a
                                                className="nav-link active dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="bi bi-bell bi-sub fs-4 text-gray-600" />
                                            </a>
                                            <ul
                                                className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="dropdownMenuButton"
                                            >
                                                <li>
                                                    <h6 className="dropdown-header">Notifications</h6>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item">No notification available</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="dropdown">
                                        <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="user-menu d-flex">
                                                <div className="user-name text-end me-3">
                                                    <h6 className="mb-0 text-gray-600">John Ducky</h6>
                                                    <p className="mb-0 text-sm text-gray-600">Administrator</p>
                                                </div>
                                                <div className="user-img d-flex align-items-center">
                                                    <div className="avatar avatar-md">
                                                        <img src="Users.gif" />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="dropdownMenuButton"
                                            style={{ minWidth: "11rem" }}
                                        >
                                            <li>
                                                <h6 className="dropdown-header">Hello, John!</h6>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="icon-mid bi bi-person me-2" /> My Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="icon-mid bi bi-gear me-2" />
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="icon-mid bi bi-wallet me-2" />
                                                    Wallet
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="icon-mid bi bi-box-arrow-left me-2" /> Logout
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <div id="main-content" >
                        <div className="page-heading">
                            <div className="page-title">
                                <div className="row">
                                    <div className="col-12 col-md-6 order-md-1 order-last">
                                        <h3>Order X</h3>
                                        <p className="text-subtitle text-muted">
                                            Let Us Serve You.
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-6 order-md-2 order-first">
                                        <nav
                                            aria-label="breadcrumb"
                                            className="breadcrumb-header float-start float-lg-end"
                                        >
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <a href="index.html">Dashboard</a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                    {props.title}
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <section className="section">
                                {/* <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Example Content</h4>
                                    </div>
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Consectetur quas omnis laudantium tempore exercitationem, expedita
                                        aspernatur sed officia asperiores unde tempora maxime odio
                                        reprehenderit distinctio incidunt! Vel aspernatur dicta
                                        consequatur!
                                    </div>
                                </div> */}
                                <div className="page-content">

                                    {props.children}

                                </div>
                            </section>
                        </div>
                        <footer>
                            <div className="footer clearfix mb-0 text-muted">
                                <div className="float-start">
                                    <p>2022 © </p>
                                </div>
                                <div className="float-end">
                                    <p>
                                        Order X
                                    </p>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
            <Script src="assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js" />
            <Script src="assets/js/bootstrap.bundle.min.js" />

            {/* <Script src="vendors/apexcharts/apexcharts.js" />
            <Script src="js/pages/ui-apexchart.js" /> */}
            {/* <Script src="js/pages/dashboard.js" /> */}
            <Script src="assets/vendors/jquery/jquery.min.js" />
            {/* <Script src="assets/vendors/jquery-datatables/jquery.dataTables.min.js" />
            <Script src="assets/vendors/jquery-datatables/custom.jquery.dataTables.bootstrap5.min.js" /> */}
            <Script src="assets/vendors/fontawesome/all.min.js" />

            <Script src="assets/js/mazer.js" />

            {/* <Script src="vendors/dayjs/dayjs.min.js" /> */}



        </>
    )
}
export default dashboard;