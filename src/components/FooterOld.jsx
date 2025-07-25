export default function Footer() {
  return (
    <footer className="bg-teal-900 text-yellow-400 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-sm">&copy; {new Date().getFullYear()} Greenwich Pharmacy. All rights reserved.</div>

        <div className="flex space-x-6">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-yellow-300 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.87v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.87 0 1.78.15 1.78.15v2h-1c-1 0-1.3.62-1.3 1.25V12h2.22l-.35 3h-1.87v7A10 10 0 0022 12z" /></svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-yellow-300 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-1a1 1 0 100 2 1 1 0 000-2z" /></svg>
          </a>

          {/* Email */}
          <a
            href="mailto:contact@greenwichpharmacy.com"
            aria-label="Email"
            className="hover:text-yellow-300 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l7.5 6.5a.5.5 0 00.5 0L20 8v10H4z" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
