import React from 'react'
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import './login.css'

function Introduction() {
  return (
 <div className="intro">
   <h2>Enter Business Details Here</h2>
      <header className="App-header">
        <Form
          autoComplete="off"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 7 }}
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
              },
              { min: 6 },
              {
                validator: (_, value) =>
                  value && value.includes("A")
                    ? Promise.resolve()
                    : Promise.reject("Password does not match criteria."),
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered does not match."
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          <Form.Item name="stage" label="Business Stage"
           rules={[
            {
              required: true,
              message: "Please Select valid stage",
            },
          ]}
          >
            <Select placeholder="Select Business Stage">
              <Select.Option value="Start-up">Start-up</Select.Option>
              <Select.Option value="Scale-up">Scale-up</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please provide your date of birth",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: "50%" }}
              picker="date"
              placeholder="Chose date of birth"
            />
          </Form.Item>

          <Form.Item
            name="website"
            label="Website"
            rules={[{ type: "url", message: "Please enter a valid url" }]}
            hasFeedback
          >
            <Input placeholder="Add your website url" />
          </Form.Item>

          <Form.Item
            name="agreement"
            wrapperCol={{ span: 12 }}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To proceed, you need to agree with our terms and conditions"
                      ),
              },
            ]}
          >
            <Checkbox>
              {" "}
              Agree to our <a href="#">Terms and Conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 13 }}>
            <Button block type="danger" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  )
}

export default Introduction