export default function Video() {
    return (
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-8">Check out a demo in action</h2>
          
          <div className="relative rounded-2xl shadow-xl overflow-hidden bg-gray-900 hover:shadow-2xl transition-shadow duration-300">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/qxJCTxq5frI"
                title="ALLMIND AI Demo"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </ div>
      </section>
    );
  }