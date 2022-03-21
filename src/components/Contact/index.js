import React, {useEffect, useState} from 'react';
import {Row, Col, Form, Input, Button, notification} from "antd";
import { useForm } from '@formspree/react';
import './style.scss'


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!'
    },
};

function Contact(props) {
    const [state, handleSubmit] = useForm("meqnzngp");
    const [showMsg, setShowMsg] = useState(false);
    const {submitting, succeeded} = state;
    useEffect(()=>{
        setShowMsg(succeeded)
        setTimeout(()=>{
            setShowMsg(false);
        },3000)
    },[succeeded,submitting])
    return (
        <section className="contact-cont" id="contact">
            <div className="main-heading">
                <h3>Contact Details</h3>
                <p className="sub-heading">
                    Want to connect? My inbox is always open!
                </p>
            </div>
            <Row>
                <Col xs={24} xl={12}>
                    <div className="contact-card">
                        <span className="icon">
                            <i className="fas fa-solid fa-envelope"></i>
                        </span>
                        <div className="card-content">
                            <span className="main-header">
                                Email
                            </span>
                            <span className="fadded-heading">
                                ashukumar2001@gmail.com
                            </span>
                        </div>
                    </div>
                    <div className="contact-card">
                        <span className="icon">
                            <i className="fab fa-brands fa-twitter"></i>
                        </span>
                        <div className="card-content">
                            <span className="main-header">
                                Twitter
                            </span>
                            <span className="fadded-heading">
                                @a_k_sharma123
                            </span>
                        </div>
                    </div>
                    <div className="contact-card">
                        <span className="icon">
                            <i className="fab fa-brands fa-linkedin-in"></i>
                        </span>
                        <div className="card-content">
                            <span className="main-header">
                                LinkedIn
                            </span>
                            <span className="fadded-heading">
                                /a-k-sharma
                            </span>
                        </div>
                    </div>
                </Col>
                <Col xs={24} xl={12}>
                    <Form {...layout} name="nest-messages" onFinish={handleSubmit} validateMessages={validateMessages}>
                        {
                            showMsg && <Form.Item
                                name={'name'}
                                label=""
                                className="label-header"
                            >
                                 <span className="notification-label">
                                    Thanks for contacting.
                                 </span>
                            </Form.Item>
                        }
                        <Form.Item
                            name={'name'}
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={'email'}
                            label="Email"
                            rules={[
                                {
                                    type: 'email',
                                },
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={'subject'}
                            label="Subject"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={'message'}
                            label="Message"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </section>
    );
}

export default Contact;