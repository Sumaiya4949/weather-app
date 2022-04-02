import { Form, Input, Button } from "antd";

const LocationInputForm = (props) => {
  const { onSubmit } = props;

  function onFormSubmit(formValues) {
    const { lat, long } = formValues;
    onSubmit(parseFloat(lat), parseFloat(long));
  }

  return (
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
        name="long"
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
  );
};

export default LocationInputForm;
