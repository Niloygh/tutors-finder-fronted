export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-black/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Why Choose TutorFinder?
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
            Discover the best way to learn with experienced tutors.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <span className="text-3xl">📚</span>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Easy Booking
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              Book tutors instantly with a smooth and simple interface.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <span className="text-3xl">✅</span>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Verified Tutors
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              All tutors are verified to ensure quality education.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <span className="text-3xl">⏰</span>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Flexible Schedule
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              Choose time slots that fit perfectly into your routine.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
              <span className="text-3xl">💰</span>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Affordable Pricing
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              Find tutors that match your budget easily and quickly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}