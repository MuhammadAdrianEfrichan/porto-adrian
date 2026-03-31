export default function FloatingRings() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute rounded-full border border-blue-400/15
        w-[800px] h-[800px] -right-20 -top-20
        animate-[floatRing_8s_ease-in-out_infinite]" />

      <div className="absolute rounded-full border border-blue-400/15
        w-[600px] h-[600px] right-16 top-16
        animate-[floatRing_8s_ease-in-out_infinite_-2s]" />

      <div className="absolute rounded-full border border-yellow-600/12
        w-[400px] h-[400px] right-55 top-50
        animate-[floatRing_8s_ease-in-out_infinite_-4s]" />

      <div className="absolute rounded-full border border-blue-400/15
        w-[200px] h-[200px] right-90 top-80
        animate-[floatRing_8s_ease-in-out_infinite_-6s]" />
    </div>
  );
}