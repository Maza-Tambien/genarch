import { Button } from "@/components/ui/button";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 space-y-16 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            GenArch – Where Legacy Builds the Future
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            We blend the experience of senior architects with the innovation of emerging talent to build structures that matter — socially, sustainably, and aesthetically.
          </p>
          <Button className="bg-black text-white px-6 py-3 rounded-2xl shadow hover:bg-gray-800 transition">Let's Talk</Button>
        </div>
        <img src="/genarch-hero-clean.jpg" alt="Hero" className="rounded-2xl shadow-lg w-full md:w-1/2" />
      </section>
      {/* About Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Who We Are</h2>
        <p>
          GenArch is an intergenerational architecture and construction company driven by the idea that wisdom and creativity are strongest when shared. Our model pairs industry veterans with recent graduates to deliver timeless, forward-thinking spaces.
        </p>
      </section>
      {/* Services Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Architectural Design</h3>
            <p>Creative, sustainable, and heritage-conscious design solutions led by both experienced minds and fresh vision.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Construction Management</h3>
            <p>From concept to completion, we ensure every build is delivered with craftsmanship and care.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Mentorship Projects</h3>
            <p>Each project is a classroom. We cultivate future leaders while preserving invaluable expertise.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Heritage + Accessibility Consulting</h3>
            <p>We champion adaptive reuse, inclusivity, and lifelong design that serves diverse communities.</p>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border p-4 rounded-xl shadow text-center">
            <img src="/team/john.jpg" alt="John" className="w-24 h-24 mx-auto rounded-full mb-2" />
            <h4 className="text-lg font-bold">John Smith</h4>
            <p className="text-sm text-gray-500">Senior Architect</p>
          </div>
          <div className="bg-white border p-4 rounded-xl shadow text-center">
            <img src="/team/emily.jpg" alt="Emily" className="w-24 h-24 mx-auto rounded-full mb-2" />
            <h4 className="text-lg font-bold">Emily Nguyen</h4>
            <p className="text-sm text-gray-500">Graduate Architect</p>
          </div>
          <div className="bg-white border p-4 rounded-xl shadow text-center">
            <img src="/team/maria.jpg" alt="Maria" className="w-24 h-24 mx-auto rounded-full mb-2" />
            <h4 className="text-lg font-bold">Maria Hernandez</h4>
            <p className="text-sm text-gray-500">Construction Supervisor</p>
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className="bg-black text-white p-8 rounded-xl text-center space-y-4">
        <h2 className="text-3xl font-bold">Let’s Build the Future Together</h2>
        <p>Whether you're seeking a partner for your next project, or a place to grow your talent — we’d love to hear from you.</p>
        <Button className="bg-white text-black hover:bg-gray-200 transition px-6 py-3 rounded-xl">Contact Us</Button>
      </section>
    </main>
  );
}
