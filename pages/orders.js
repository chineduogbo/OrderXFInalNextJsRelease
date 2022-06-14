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
                <Dashboard title="Orders">
                    <div className="page-content">
                        <section className="row">
                            <div className="card">
                                <div className="card-body px-3 py-4-5">
                                    <div className=''>
                                        <Table dataSource={props.events}>

                                            <Column title="Event Name" dataIndex="eventname" key="eventname" />
                                            <Column title="Event Address" dataIndex="eventaddress" key="eventaddress" />

                                            <Column title="Created By" dataIndex="username" key="username" />
                                            <Column title="Created On" dataIndex="DateCreated" key="DateCreated" />


                                        </Table>
                                    </div>
                                </div></div>
                        </section>
                    </div>
                </Dashboard>

            </div>
        </>
    )
}

export default Event;

export async function getStaticProps() {
    // Get external data from the file system, API, DB, etc.

    var data = await fetch('http://localhost:3000/api/events/getall', {
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