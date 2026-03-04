import { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Nombre obligatorio";
    if (!email.trim()) newErrors.email = "Email obligatorio";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email inválido";
    if (!phone.trim()) newErrors.phone = "Teléfono obligatorio";
    else if (!/^\d{7,15}$/.test(phone)) newErrors.phone = "Teléfono inválido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onConfirm({ name, email, phone });
      setName("");
      setEmail("");
      setPhone("");
      setErrors({});
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h3>Datos del comprador</h3>

      <label>Nombre</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && <div className="checkout-error">{errors.name}</div>}

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <div className="checkout-error">{errors.email}</div>}

      <label>Teléfono</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {errors.phone && <div className="checkout-error">{errors.phone}</div>}

      <button type="submit">Confirmar compra</button>
    </form>
  );
};

export default CheckoutForm;