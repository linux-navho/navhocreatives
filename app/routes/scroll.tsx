import useSlowScroll from '~/hooks/useSlowScroll'; // Adjust path if necessary

export default function Scroll(){
  // Use the hook to apply the slow scroll effect
  useSlowScroll(0.3); // You can adjust the factor here

  return (
    <div className="min-h-screen p-8">
      {/* Your page content here */}
      <div className="space-y-8">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="p-4 bg-gray-100 rounded">
            <h2 className="text-xl font-bold">Section {i + 1}</h2>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </div>
  );
};


