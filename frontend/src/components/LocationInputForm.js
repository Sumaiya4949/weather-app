import { Form, Input, Button, Card } from "antd";
import { useCallback } from "react";

const LocationInputForm = (props) => {
  const { onSubmit } = props;

  const onFormSubmit = useCallback(
    (formValues) => {
      const { lat, lon } = formValues;
      onSubmit(lat, lon);
    },
    [onSubmit]
  );

  return (
    <Card style={{ margin: "20px" }} hoverable={true} bordered={true}>
      <Form
        style={{ maxWidth: "400px" }}
        name="wrap"
        labelCol={{
          flex: "110px",
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        onFinish={onFormSubmit}
      >
        <Form.Item
          label="Latitude"
          name="lat"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label="Longitude"
          name="lon"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            View Weather
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LocationInputForm;
