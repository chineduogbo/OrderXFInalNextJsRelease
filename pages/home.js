import React from 'react'
import Dashboard from '../components/dashboard';


const home = () => {
    return (
        <>

            <Dashboard title="Home">
                <>

                    <div className="page-content">
                        <section className="row">
                            <div className="col-12 col-lg-9">
                                <div className="row">
                                    <div className="col-6 col-lg-3 col-md-6">
                                        <div className="card">
                                            <div className="card-body px-3 py-4-5">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="">

                                                            <img src="events.gif" height={42} width={42} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <h6 className="text-muted font-semibold">Total Events</h6>
                                                        <h6 className="font-extrabold mb-0">112.000</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-6">
                                        <div className="card">
                                            <div className="card-body px-3 py-4-5">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="">
                                                            <img src="orders.gif" height={42} width={42} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <h6 className="text-muted font-semibold">Orders Today</h6>
                                                        <h6 className="font-extrabold mb-0">183.000</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-6">
                                        <div className="card">
                                            <div className="card-body px-3 py-4-5">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="">
                                                            <img src="stock.gif" height={42} width={42} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <h6 className="text-muted font-semibold">Stock</h6>
                                                        <h6 className="font-extrabold mb-0">80.000</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3 col-md-6">
                                        <div className="card">
                                            <div className="card-body px-3 py-4-5">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className=" ">
                                                            <img src="waiter.gif" height={42} width={42} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <h6 className="text-muted font-semibold">Waiters</h6>
                                                        <h6 className="font-extrabold mb-0">112</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-12 col-xl-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Latest Orders</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-lg">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Table No</th>
                                                                <th>Order</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="col-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="avatar avatar-md">
                                                                            <img src="Users.gif" />
                                                                        </div>
                                                                        <p className="font-bold ms-3 mb-0">Si Cantik</p>
                                                                    </div>
                                                                </td>
                                                                <td className="col-auto">
                                                                    <p className=" mb-0">
                                                                        Table 1
                                                                    </p>
                                                                </td>
                                                                <td className="col-auto">
                                                                    1. Fish
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="col-3">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="avatar avatar-md">
                                                                            <img src="Users.gif" />
                                                                        </div>
                                                                        <p className="font-bold ms-3 mb-0">Si Ganteng</p>
                                                                    </div>
                                                                </td>
                                                                <td className="col-auto">
                                                                    <p className=" mb-0">
                                                                        Table 100
                                                                    </p>
                                                                </td>
                                                                <td className="col-auto">
                                                                    1. Fish
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                    <div className="px-4">
                                                        <button className="btn btn-block btn-xl btn-light-primary font-bold mt-3">
                                                            View All
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3">
                                <div className="card">
                                    <div className="card-body py-4 px-5">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-xl">
                                                <img src="moneyraised.gif" />
                                            </div>
                                            <div className="ms-3 name">
                                                <h5 className="font-bold">Total Sales</h5>
                                                <h6 className="text-muted mb-0">20</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Available Waiters</h4>
                                    </div>
                                    <div className="card-content pb-4">
                                        <div className="recent-message d-flex px-4 py-3">
                                            <div className="avatar avatar-lg">
                                                <img src="waiteruser.gif" />
                                            </div>
                                            <div className="name ms-4">
                                                <h5 className="mb-1">Hank Schrader</h5>
                                                <h6 className="text-muted mb-0">@johnducky</h6>
                                            </div>
                                        </div>
                                        <div className="recent-message d-flex px-4 py-3">
                                            <div className="avatar avatar-lg">
                                                <img src="waiteruser.gif" />
                                            </div>
                                            <div className="name ms-4">
                                                <h5 className="mb-1">Dean Winchester</h5>
                                                <h6 className="text-muted mb-0">@imdean</h6>
                                            </div>
                                        </div>
                                        <div className="recent-message d-flex px-4 py-3">
                                            <div className="avatar avatar-lg">
                                                <img src="waiteruser.gif" />
                                            </div>
                                            <div className="name ms-4">
                                                <h5 className="mb-1">John Dodol</h5>
                                                <h6 className="text-muted mb-0">@dodoljohn</h6>
                                            </div>
                                        </div>
                                        <div className="px-4">
                                            <button className="btn btn-block btn-xl btn-light-primary font-bold mt-3">
                                                View All
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </>



            </Dashboard>
        </>
    )
}

export default home;