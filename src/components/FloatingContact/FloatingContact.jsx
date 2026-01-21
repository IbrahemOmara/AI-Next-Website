import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./FloatingContact.css";

export default function FloatingContact() {
const [open, setOpen] = useState(false);

return (
    <>
    <button className="floating-btn " onClick={() => setOpen(true)}>
        ✉️ 
    </button>

    {open && (
        <div className="overlay-contact">
        <div className="modal-contact">
            <button onClick={() => setOpen(false)} className="btn-close" ></button>
            <ContactForm onSuccess={() => setOpen(false)} />
        </div>
        </div>
    )}
    </>
);
}
