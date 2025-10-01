import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import qr from "../images/qr-email.png";

import "../contact/contact.css";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

function ContactForm() {
  const theme = useTheme();
  const { t } = useTranslation();

  const [state, handleSubmit] = useForm("xknyegez");
  const nameUser = localStorage.getItem("user");
  if (state.succeeded) {
    return (
      <div className="res">
        <div className="respuesta">
          <p>Thanks {nameUser} </p>
          <div>your message has been sent, I will contact you soon </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="contact"
      style={{
        backgroundColor: theme.backgroundPrimary,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="form_contact"
        style={{
          flex: 1,
          minWidth: "300px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="form_contact_email">
          <input
            id="Name"
            type="text"
            name="Name"
            defaultValue={nameUser}
            placeholder={t("contactMe.contactInputNameHover")}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: theme.backgroundSecondary,
              color: theme.colorPrimary,
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <ValidationError prefix="Name" field="Name" errors={state.errors} />

        <div className="form_contact_email">
          <input
            id="email"
            type="email"
            name="email"
            placeholder={t("contactMe.contactInputEmailHover")}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: theme.backgroundSecondary,
              color: theme.colorPrimary,
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <div className="form_contact_email">
          <input
            id="telephone"
            type="tel"
            name="telephone"
            placeholder="+56 5689215"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: theme.backgroundSecondary,
              color: theme.colorPrimary,
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <ValidationError
          prefix="Telephone"
          field="telephone"
          errors={state.errors}
        />

        <div className="form_contact_text">
          <textarea
            id="message"
            name="message"
            placeholder={t("contactMe.contactInputMessageHover")}
            style={{
              width: "100%",
              height: "120px",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: theme.backgroundSecondary,
              color: theme.colorPrimary,
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          style={{
            padding: "10px 20px",
            marginTop: "30px",
            backgroundColor: theme.colorSecondary,
            color: theme.colorPrimary,
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {t("contactMe.contactButton")}
        </button>
      </form>

      {/* QR */}
      <div
        className="qr"
        style={{
          flex: "1 1 50%",
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="qr-title" style={{ marginBottom: "10px" }}>
          {t("contactMe.contactQr")}
        </div>
        <div style={{ width: "80%", maxWidth: "400px" }}>
          <img
            src={qr}
            alt=""
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
