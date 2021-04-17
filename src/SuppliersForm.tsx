import * as React from "react";
import { Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { InputField } from "./InputField";

interface Supplier {
  name: string;
  website: string;
}

interface Props {
  onSubmit: (supplier: Supplier) => void;
}

export const SuppliersForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", website: "" }}
      onSubmit={(supplier) => {
        onSubmit(supplier);
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <Field
              name="name"
              placeholder="e.g. Digikey"
              component={InputField}
            />
          </div>
          <div>
            <Field
              name="website"
              placeholder="e.g. www.digikey.com"
              component={InputField}
            />
          </div>
          <Button type="submit">submit</Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};
