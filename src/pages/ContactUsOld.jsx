
export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Message sent! (Set up EmailJS/Nodemailer to enable actual delivery.)");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="p-8 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-teal-700 mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 rounded border focus:ring-2 ring-teal-500"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 rounded border focus:ring-2 ring-teal-500"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded border focus:ring-2 ring-teal-500"
          required
        />
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
