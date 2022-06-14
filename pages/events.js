import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Tag, Space, Modal, Button, Form, Input, Alert } from 'antd';
import Dashboard from '../components/dashboard';
import { Formik } from 'formik';

import Link from 'next/link';
const axios = require('axios');


const { Column, ColumnGroup } = Table;

const data = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const Event = (props) => {
    console.log(props)

    const [visible, setVisible] = useState(false);
    return (
        <>
            <div style={{ backgroundColor: "#f2f7ff" }}>
                <Dashboard title="Events">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-body">
                                <Button type="primary" onClick={() => setVisible(true)} className="mt-2" align="right">
                                    Add Event
                                </Button>
                                <div className='table-responsive'>
                                    <Table dataSource={props.events}>

                                        <Column title="Event Name" dataIndex="eventname" key="eventname" />
                                        <Column title="Event Address" dataIndex="eventaddress" key="eventaddress" />

                                        <Column title="Created By" dataIndex="username" key="username" />
                                        <Column title="Created On" dataIndex="DateCreated" key="DateCreated" />

                                        <Column
                                            title="Action"
                                            key="action"
                                            render={(text, record) => (
                                                <Space size="middle">
                                                    <button type="button" className="btn btn-primary" onClick={() => setVisible(true)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                        </svg>
                                                    </button>
                                                    <button type="button" className="btn btn-danger" onClick={() => setVisible(true)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                                        </svg>
                                                    </button>

                                                </Space>
                                            )}
                                        />
                                    </Table>
                                </div>
                            </div></div></div>
                </Dashboard>
                <Modal
                    title="Create Events"
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                    width={1000}
                    footer={null}
                >
                    <Formik
                        initialValues={{
                            eventaddress: '',
                            eventname: '',

                        }}
                        validate={values => {
                            const errors = {};

                        }}
                        onSubmit={async (values, { setSubmitting }) => {


                            const body = {
                                eventaddress: values.eventaddress,
                                eventname: values.eventname,


                            };
                            const response = await fetch('/api/events', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(body),
                            });
                            //console.log(response);
                            const data = await response.json();

                            console.log(await data);
                            if (data.success) {
                                setIsModalVisible(false);
                                //  localStorage.setItem("UserDetails", JSON.stringify(data));
                                <Alerts />
                            }


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



                            <div >
                                <div className="row ">
                                    <div className=" col-12">
                                        <div id="auth-left">


                                            <form onSubmit={handleSubmit} layout="vertical"
                                                name="form_in_modal">

                                                <div className="form-group position-relative has-icon-left mb-4">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-xl"
                                                        placeholder="Event Name"
                                                        value={values.eventname}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        name="eventname"
                                                        id="eventname"
                                                    />
                                                    <div className="form-control-icon">
                                                        <i className="bi bi-calendar-event" />
                                                    </div>
                                                </div>
                                                <div className="form-group position-relative has-icon-left mb-4">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-xl"
                                                        placeholder="Event Address"
                                                        value={values.eventaddress}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        name="eventaddress"
                                                        id="eventaddress"
                                                    />
                                                    <div className="form-control-icon">
                                                        <i className="bi bi-geo-alt" />
                                                    </div>
                                                </div>



                                                <button className="btn btn-primary  btn-lg shadow-lg mt-5 " type="submit" >
                                                    Create Event
                                                </button>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        )}
                    </Formik>
                </Modal>
            </div>
        </>
    )
}

export default Event;

export async function getStaticProps() {
    // Get external data from the file system, API, DB, etc.

    var data = await fetch('https://orderxc.herokuapp.com/Event/GetAllEvents?userId=62247cd61850c634bc05c104', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    var readdata = await data.json();
    //console.log(readdata);
    // const jdata = await data.json();
    // console.log(jdata)
    //var {returnobj} = await readdata;
    //var returnobj = JSON.parse(JSON.stringify(await readdata));
    // console.log(returnobj.data)
    // The value of the `props` key will be
    //  passed to the `Home` component
    // const projects = await data.json();
    //console.log(returnobj)

    var data = readdata;

    return {
        props: { events: data }
    }

}


export const Alerts = () => {
    return (
        <> <Alert
            message="Info Text"
            description="Event Created"
            type="info"
            action={
                <Space direction="vertical">
                    <Button size="small" type="primary">
                        Accept
                    </Button>

                </Space>
            }
            closable
        /></>
    )
}