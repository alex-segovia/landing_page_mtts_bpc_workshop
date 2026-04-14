const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-10 text-center text-sm border-t-4 border-orange-500">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-left">
        <h3 className="text-white font-bold text-lg mb-2">IEEE MTT-S PUCP Student Branch Chapter</h3>
        <p>© 2026 All rights reserved.</p>
      </div>
      <div className="text-right">
        <p className="font-semibold text-white mb-1">Contact</p>
        <p>Email: mtts.pucp@ieee.org</p>
        <p>Av. Universitaria 1801, San Miguel, Lima - Perú</p>
      </div>
    </div>
  </footer>
);

export default Footer;