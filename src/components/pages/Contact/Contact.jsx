import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { countries } from "../../ContactForm/countries";
import "./Contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      phone: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("الاسم مطلوب"),
      email: Yup.string()
        .email("إيميل غير صحيح")
        .required("الإيميل مطلوب"),
      country: Yup.string().required("الدولة مطلوبة"),
      phone: Yup.string().required("رقم الهاتف مطلوب"),
      message: Yup.string().required("الرسالة مطلوبة"),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);

        await emailjs.send(
          "service_g4poj7o",
          "template_9337lt8",
          values,
          "cfo9mAk7YvLnJvgAN"
        );

        alert("تم إرسال الرسالة بنجاح ✅");
        resetForm();
      } catch (error) {
        alert("حصل خطأ أثناء الإرسال ❌");
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="content-section">
      <section className="contact-section py-5">
        <Container>
          <h2 className="section-title text-main mb-4 text-center">
            Contact Us
          </h2>

          <Row className="g-5">
            {/* FORM */}
            <Col md={6}>
              <Form onSubmit={formik.handleSubmit}>
                {/* NAME */}
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    {...formik.getFieldProps("name")}
                    isInvalid={formik.touched.name && !!formik.errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* EMAIL */}
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    {...formik.getFieldProps("email")}
                    isInvalid={formik.touched.email && !!formik.errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* COUNTRY */}
                <Form.Group className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Select
                    value={formik.values.country}
                    onBlur={formik.handleBlur}
                    isInvalid={
                      formik.touched.country && !!formik.errors.country
                    }
                    onChange={(e) => {
                      const selected = countries.find(
                        (c) => c.name_en === e.target.value
                      );

                      formik.setFieldValue("country", e.target.value);
                      formik.setFieldValue(
                        "phone",
                        selected ? selected.code : ""
                      );
                    }}
                  >
                    <option value="">Select country</option>
                    {countries.map((c, i) => (
                      <option key={i} value={c.name_en}>
                        {c.name_ar}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.country}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* PHONE */}
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    {...formik.getFieldProps("phone")}
                    isInvalid={formik.touched.phone && !!formik.errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* MESSAGE */}
                <Form.Group className="mb-4">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    {...formik.getFieldProps("message")}
                    isInvalid={
                      formik.touched.message && !!formik.errors.message
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  type="submit"
                  variant="warning"
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </Form>
            </Col>

            {/* INFO */}
            <Col md={6}>
              <div className="contact-info">
                <h5 className="mb-3">Get in Touch</h5>
                <p><strong>Email:</strong> ai-next-academy@gmail.com</p>
                <p><strong>Phone:</strong> +20 123 456 789</p>
                <p><strong>Support Hours:</strong> 24/7</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
