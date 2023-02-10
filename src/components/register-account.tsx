import { Button } from "antd";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import { FC, useContext } from "react";
import registerAccount from "../services/register-account";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { useForm } from "antd/lib/form/Form";
import { LanguageCtx } from "../services/context/language-ctx";

type Data = {
  login_email: string;
  confirm_email: string;
  first_name: string;
  last_name: string;
  is_admin: boolean;
  is_member: boolean;
};

const RegisterAccount: FC = () => {
  // This hook is important for type checking the form
  const [form] = useForm<Data>();
  const { en } = useContext(LanguageCtx);

  async function handleRegister({
    first_name,
    last_name,
    login_email,
    is_admin,
    is_member,
  }: Data) {
    const res = await registerAccount({
      first_name,
      last_name,
      login_email,
      is_admin,
      is_member,
    });
    if (res) form.resetFields();
  }

  return (
    <div className="register-account-form">
      <h1>{en ? "Register Account" : "Enregistrer un Compte"}</h1>
      <h2 style={{ marginBottom: 24 }}>
        {en
          ? "This page will create an account for the given email."
          : "Cette page créera un compte pour l'e-mail donné."}
      </h2>
      <Form
        form={form}
        onFinish={handleRegister}
        style={{ width: "100%", maxWidth: "25rem" }}
        size="large"
        layout="vertical"
      >
        <Form.Item
          label={en ? "First Name" : "Prénom"}
          name="first_name"
          rules={[{ required: true, message: en ? "Required" : "Requis" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={en ? "Last Name" : "Nom de Famille"}
          name="last_name"
          rules={[{ required: true, message: en ? "Required" : "Requis" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={en ? "Email" : "Email"}
          name="login_email"
          rules={[
            { required: true, message: en ? "Required" : "Requis" },
            { type: "email", message: en ? "Invalid Email" : "Email invalide" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={en ? "Confirm Email" : "Confirmer Email"}
          name="confirm_email"
          validateFirst={true}
          rules={[
            { required: true, message: en ? "Required" : "Requis" },
            { type: "email", message: en ? "Invalid Email" : "Email invalide" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (getFieldValue("login_email") === value)
                  return Promise.resolve();
                return Promise.reject(
                  new Error(
                    en ? "Emails do not match" : "Emails ne correspondent pas"
                  )
                );
              },
            }),
          ]}
          dependencies={["login_email"]}
        >
          <Input />
        </Form.Item>

        <div className="row">
          <Form.Item
            name="is_member"
            valuePropName="checked"
            initialValue={true}
          >
            <Checkbox>
              {en ? "Register as Member" : "Inscrivez-vous en tant que membre"}
            </Checkbox>
          </Form.Item>
          <Form.Item name="is_admin" valuePropName="checked">
            <Checkbox>
              {en
                ? "Grant Admin Privileges"
                : "Accorder des privilèges d'administrateur"}
            </Checkbox>
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ paddingLeft: 40, paddingRight: 40 }}
            size="large"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterAccount;
