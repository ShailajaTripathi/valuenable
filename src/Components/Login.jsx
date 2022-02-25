import React from 'react'
import { Form, Button, Checkbox, Input} from "antd";
import './login.css'

function Login() {
  return (
 <div className="intro">
   <h2>Login page</h2>
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

          <Form.Item wrapperCol={{ span: 6 }}>
            <Button block type="danger" htmlType="submit"  style={{ marginLeft:'80%'}}>
             Login
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  )
}

export default Login