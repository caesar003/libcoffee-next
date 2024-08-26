import SectionWrapper from "@/components/SectionWrapper";

export default function Contact() {
  return (
    <main>
      <SectionWrapper id="contact">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          We&apos;re thrilled to hear what you&apos;re about to say
        </h3>

        <form className="space-y-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-gray-700 font-medium" htmlFor="name">
                Name<sup className="text-red-500">*</sup>:
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700 font-medium" htmlFor="email">
                Email<sup className="text-red-500">*</sup>:
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700 font-medium" htmlFor="message">
                Message<sup className="text-red-500">*</sup>:
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                id="message"
                name="message"
                rows={5}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-medium py-3 rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </SectionWrapper>
    </main>
  );
}
