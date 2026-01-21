import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { countries } from "./countries";
import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm({ onSuccess }) {
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
    email: Yup.string().email("إيميل غير صحيح").required("الإيميل مطلوب"),
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

        resetForm();
        onSuccess && onSuccess();
        alert("تم الإرسال بنجاح ✅");
    } catch (error) {
        alert("حصل خطأ أثناء الإرسال ❌");
        console.error(error);
    } finally {
        setLoading(false);
    }
    },
});

return (
    <form onSubmit={formik.handleSubmit} className="form-contact">
    <input
        className="form-control"
        placeholder="الاسم"
        {...formik.getFieldProps("name")}
    />
    {formik.touched.name && formik.errors.name && (
        <small className="error">{formik.errors.name}</small>
    )}

    <input
        className="form-control"
        placeholder="الإيميل"
        {...formik.getFieldProps("email")}
    />
    {formik.touched.email && formik.errors.email && (
        <small className="error">{formik.errors.email}</small>
    )}

    <select
        className="form-control"
        name="country"
        value={formik.values.country}
        onBlur={formik.handleBlur}
        onChange={(e) => {
        const c = countries.find(
            (item) => item.name_en === e.target.value
        );

        formik.setFieldValue("country", e.target.value);
        formik.setFieldValue("phone", c ? c.code : "");
        }}
    >
        <option value="">الدولة</option>
        {countries.map((c, i) => (
        <option key={i} value={c.name_en}>
            {c.name_ar}
        </option>
        ))}
    </select>
    {formik.touched.country && formik.errors.country && (
        <small className="error">{formik.errors.country}</small>
    )}

    <input
        className="form-control"
        placeholder="رقم الهاتف"
        {...formik.getFieldProps("phone")}
    />
    {formik.touched.phone && formik.errors.phone && (
        <small className="error">{formik.errors.phone}</small>
    )}

    <textarea
        className="form-control"
        placeholder="الرسالة"
        {...formik.getFieldProps("message")}
    />
    {formik.touched.message && formik.errors.message && (
        <small className="error">{formik.errors.message}</small>
    )}

    <button
        type="submit"
        className="btn btn-warning"
        disabled={loading}
    >
        {loading ? "جاري الإرسال..." : "إرسال"}
    </button>
    </form>
);
}
